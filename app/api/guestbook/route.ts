import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const response = await prisma.comment.findMany({
      include: {
        user: true
      },
      orderBy: {
        createdAt: "asc"
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


export async function POST(request: Request) {
  try {

    const session = await auth()

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({
        message: "Login first!"
      }, { status: 401 })
    }

    const body = await request.json()
    const { text } = body

    if (!text || !text.trim()) {
      return NextResponse.json(
        { message: "The comment cannot be empty." },
        { status: 400 }
      )
    }

    const newComment = await prisma.comment.create({
      data: {
        text: text.trim(),
        userId: session.user.id
      },
      include: {
        user: true
      }
    })

    return NextResponse.json(newComment, { status: 201 })

  } catch (error) {
    console.error("POST_COMMENT_ERROR:", error);
    return NextResponse.json(
      { message: 'Gagal mengirim komentar' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {

  const session = await auth()

  if (!session || !session.user || !session?.user.id || session.user.role !== "Admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }


  try {

    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get("id")

    if (!chatId) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 })
    }

    await prisma.comment.delete({ where: { id: chatId } })

    return NextResponse.json({ message: "Deleted" }, { status: 200 })

  } catch (error) {
    console.error("DELETE_COMMENT_ERROR:", error)
    return NextResponse.json({ message: "Gagal menghapus komentar" }, { status: 500 })
  }
} 