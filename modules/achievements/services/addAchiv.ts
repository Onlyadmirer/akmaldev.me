'use server'

import { prisma } from "@/lib/prisma";

export type AchivAdd = {
  title: string | null;
  url: string;
  publisher: string;
  issuedOn: string;
  userId: string
}

export async function addAchiv(data: AchivAdd) {

  try {
    const result = await prisma.achievements.create({
      data: {
        title: data.title,
        url: data.url,
        issuedOn: data.issuedOn,
        publisher: data.publisher,
        authorId: data.userId,
      }
    }
    )
    return { success: true, data: result };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Gagal menambahkan data" };
  }
}
