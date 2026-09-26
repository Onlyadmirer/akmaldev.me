import { prisma } from "@/lib/prisma";
import { OWNER_EMAIL } from "@/common/constants/owner";

export default async function getProjectDetail() {
  const user = await prisma.user.findUnique({
    where: { email: OWNER_EMAIL },
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