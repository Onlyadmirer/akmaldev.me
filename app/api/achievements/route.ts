import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: { email: "akmalrbc6@gmail.com" },
      include: {
        achievements: true
      }
    })

    const achievements = user?.achievements || []

    return NextResponse.json(achievements, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Gagal mengambil data achievements' },
      { status: 500 }
    );
  }
}