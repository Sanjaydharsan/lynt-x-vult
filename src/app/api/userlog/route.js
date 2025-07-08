import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const organizationId = request.headers.get("x-organization-id");
    if (!organizationId) {
      return NextResponse.json(
        { error: "Organization ID is required" },
        { status: 400 }
      );
    }

    const logs = await prisma.userLog.findMany({
      where: {
        organizationid: Number(organizationId),
      },
      orderBy: {
        actiondate: "desc",
      },
    });

    const userIds = [...new Set(logs.map((log) => log.userid))];

    const users = await prisma.users.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      select: {
        id: true,
        fullname: true,
        email: true,
        fulldata: true,
      },
    });

    const userMap = new Map(users.map((user) => [user.id, user]));

    const enrichedLogs = logs.map((log) => ({
      ...log,
      fullname: userMap.get(log.userid)?.fulldata?.fullName || "",
      email: userMap.get(log.userid)?.email || "N/A",
      user: userMap.get(log.userid) || null,
    }));

    return NextResponse.json(enrichedLogs, { status: 200 });
  } catch (err) {
    console.error("UserLog API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
