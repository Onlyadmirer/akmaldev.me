import { prisma } from "@/lib/prisma";
import { OWNER_EMAIL } from "@/common/constants/owner";

export const getAchievements = async () => {
  const user = await prisma.user.findUnique({
    where: { email: OWNER_EMAIL },
    include: {
      achievements: true
    }
  })

  const achievements = user?.achievements || []

  return { achievements }
}