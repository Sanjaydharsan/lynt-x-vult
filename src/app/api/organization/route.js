import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { clerkClient } from "@clerk/clerk-sdk-node";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const organizations = await prisma.organization.findMany();
    return new Response(JSON.stringify(organizations), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      userid,
      name,
      industry,
      company_size,
      expected_monthly_volume,
      email,
      phone,
      primary_use_case,
      expected_time_case,
      implementation_time_line,
      templateid,
      team_role,
      time_size,
      from_email,
      to_email,
      random_org_id,
    } = body;

    if (!userid || !name) {
      return NextResponse.json(
        { error: "userid and name are required" },
        { status: 400 }
      );
    }
    const existingOrg = await prisma.organization.findFirst({
      where: {
        name: name.trim(),
      },
    });

    if (existingOrg) {
      return NextResponse.json(
        { error: `Organization name "${name}" already exists.` },
        { status: 409 }
      );
    }

    // 1. Create organization in Clerk
    const clerkOrg = await clerkClient.organizations.createOrganization({
      name,
      createdBy: userid,
    });

    // 2. Save organization in your DB
    const dbOrg = await prisma.organization.create({
      data: {
        userid,
        name,
        industry,
        company_size,
        expected_monthly_volume,
        email,
        phone,
        primary_use_case,
        expected_time_case,
        implementation_time_line,
        templateid: JSON.stringify(templateid),
        team_role: JSON.stringify(team_role),
        time_size,
        org_id: clerkOrg.id,
        fromemail: from_email || null,
        toemail: to_email || null,
      },
    });

    // 3. Update the user's Org_ID in users table
    await prisma.users.update({
      where: { id: userid },
      data: {
        Org_ID: clerkOrg.id, // Clerk org ID
        organizationid: dbOrg.id, // Local DB org ID (Integer)
      },
    });

    if (random_org_id) {
      await prisma.xerotoken.updateMany({
        where: { organizationid: random_org_id },
        data: { organizationid: String(dbOrg.id) },
      });
 
      await prisma.zohotoken.updateMany({
        where: { organizationid: random_org_id },
        data: { organizationid: String(dbOrg.id) },
      });
    }
    // 4. Duplicate templates
    const templateIds = Array.isArray(templateid) ? templateid : [];
    const duplicatedTemplateIds = [];

    for (const tId of templateIds) {
      const originalTemplate = await prisma.template.findUnique({
        where: { id: tId },
        include: {
          templateFields: {
            include: { children: true },
          },
        },
      });

      if (!originalTemplate) continue;

      // Create new template
      const newTemplate = await prisma.template.create({
        data: {
          name: originalTemplate.name,
          isActive: originalTemplate.isActive,
          isDelete: originalTemplate.isDelete,
          organizationId: dbOrg.id, // ✅ Local DB org ID (Integer)
          orderno: originalTemplate.orderno,
          client: originalTemplate.client,
        },
      });

      duplicatedTemplateIds.push(newTemplate.id);

      const fieldIdMap = new Map();

      for (const field of originalTemplate.templateFields) {
        const newField = await prisma.templateField.create({
          data: {
            templateId: newTemplate.id,
            type: field.type,
            icon: field.icon,
            label: field.label,
            properties: field.properties,
            parentId: field.parentId,
            isActive: field.isActive,
          },
        });

        fieldIdMap.set(field.id, newField.id);

        for (const child of field.children) {
          await prisma.templateChild.create({
            data: {
              templateFieldsId: newField.id,
              type: child.type,
              icon: child.icon,
              label: child.label,
              properties: child.properties,
              parentId: child.parentId,
              isActive: child.isActive,
            },
          });
        }
      }
    }

    // 5. Return response
    return NextResponse.json(
      {
        message: "Organization created and templates duplicated successfully",
        dbOrg,
        clerkOrg,
        duplicatedTemplateIds,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/organization error:", err);
    return NextResponse.json(
      { error: err?.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}
