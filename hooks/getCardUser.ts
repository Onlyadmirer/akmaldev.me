import { prisma } from "@/lib/prisma"

export const getCardUser = async () => {
  const user = await prisma.user.findFirst({
    where: { role: "Admin" },
    include: {
      achievements: {
        select: {
          id: true,
          title: true,
          url: true,
          publisher: true,
          issuedOn: true,
        }
      },
      projects: {
        select: {
          id: true,
          title: true,
          description: true,
          image: true,
          url: true,
          stack: true
        }
      }
    }
  })

  const userAchievements = user?.achievements || []

  const userProjects = user?.projects || []

  if (!user) {
    throw new Error('User not found');  // Atau return empty + log
  }


  return { userAchievements, userProjects }
}