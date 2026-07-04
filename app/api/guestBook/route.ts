import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const response = await prisma.comment.findMany({
      include: {
        user: true
      },
      orderBy: {
        createdAt: "desc"
      }
    })

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Gagal mengambil data achievements' },
      { status: 500 }
    );
  }
}


export async function POST() {
  try {

  } catch (error) {

  }
}