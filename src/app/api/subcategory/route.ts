import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const subCategories = await prisma.subcategory.findMany();
        return NextResponse.json(subCategories);
    } catch (error) {
        return NextResponse.json(error);
    }
}

export const POST = async (request: Request) => {
    try {
        const { title, categoryId } = await request.json();

        const createCategory = await prisma.subcategory.create({
            data: { title, categoryId }
        });
        return NextResponse.json(createCategory)
    } catch (error) {
        return NextResponse.json(error);
    }
}