import { prisma } from "@/lib/prisma"

export const getInfo = async () => {
  const user = await prisma.user.findUnique({
    where: { email: "akmalrbc6@gmail.com" },
    include: {
      achievements: true,
      projects: true
    }
  })

  const userAchievements = user?.achievements || []

  const userProjects = user?.projects || []

  if (!user) {
    throw new Error('User not found');  // Atau return empty + log
  }


  return { userAchievements, userProjects }
}


export default async function getProjectDetail(slug: string) {
  const project = await prisma.projects.findUnique({
    where: { slug: slug },
    include: {
      stack: true,
      author: true
    }
  })

  if (!project) return null
  return project
}