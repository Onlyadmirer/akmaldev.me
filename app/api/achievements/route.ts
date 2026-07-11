import { prisma } from "@/lib/prisma";
import { AchivAdd } from "@/types/userTypes";
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
    console.error("--- PRISMA ERROR ---", error);
    return NextResponse.json(
      { message: 'Gagal mengambil data achievements' },
      { status: 500 }
    );
  }
}

export async function POST(r: Request) {
  try {

    const data = await r.json() as AchivAdd

    const result = await prisma.achievements.create({
      data: {
        title: data.achiv.title,
        url: data.achiv.url,
        issuedOn: data.achiv.issuedOn,
        publisher: data.achiv.publisher,
        authorId: data.userId,
      }
    }
    )
    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error("--- PRISMA ERROR ---", error);
    return NextResponse.json(
      { message: 'Gagal tambahkan data achievements' },
      { status: 500 }
    );
  }
}