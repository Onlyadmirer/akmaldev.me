import { prisma } from "@/lib/prisma";

export default async function getProjectDetail() {
  const user = await prisma.user.findUnique({
    where: { email: "akmalrbc6@gmail.com" },
    include: {
      projects: {
        include: {
          stack: true
        }
      },
    }
  })

  const userProjects = (user?.projects || []).map((project) => ({
    ...project,
    stack: project.stack.map((s) => s.name)
  }))

  if (!user) {
    throw new Error('User not found');  // Atau return empty + log
  }

  return { userProjects }
}