import { PrismaClient } from '@/generated/prisma';
const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const { orgid } = await params;

    try {
        const users = await prisma.zohotoken.findMany({
            where: { organizationid: orgid },
        });
        return new Response(JSON.stringify(users), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
