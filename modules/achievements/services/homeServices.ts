import { prisma } from "@/lib/prisma";

export const getAchievements = async () => {
  const user = await prisma.user.findUnique({
    where: { email: "akmalrbc6@gmail.com" },
    include: {
      achievements: true
    }
  })

  const achievements = user?.achievements || []

  return { achievements }
}