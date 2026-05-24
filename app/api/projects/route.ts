import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const response = await prisma.user.findUnique({
      where: {
        email: "akmalrbc6@gmail.com"
      },
      include: {
        projects: {
          take: 3,
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Gagal mengambil data projects' },
      { status: 500 }
    );
  }
}