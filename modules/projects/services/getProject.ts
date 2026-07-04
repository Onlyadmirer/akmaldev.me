import { prisma } from "@/lib/prisma";

export default async function getProjectDetail() {
  const user = await prisma.user.findUnique({
    where: { email: "akmalrbc6@gmail.com" },
    include: {
      projects: {
        orderBy: {
          id: "asc"
        },
        include: {
          techStacks: true
        }
      },
    }
  })

  const userProjects = (user?.projects || []).map((project) => ({
    ...project,
    stack: project.techStacks.map((s) => s.name)
  }))

  if (!user) {
    throw new Error('User not found');  // Atau return empty + log
  }

  return { userProjects }
}