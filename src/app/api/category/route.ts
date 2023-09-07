import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json(error);
    }
}

export const POST = async (request: Request) => {
    try {
        const { title } = await request.json();

        const createCategory = await prisma.category.create({
            data: { title }
        });
        return NextResponse.json(createCategory)
    } catch (error) {
        return NextResponse.json(error);
    }
}