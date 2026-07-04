import { prisma } from "@/lib/prisma"


export default async function getProjectDetail(slug: string) {
  const project = await prisma.projects.findUnique({
    where: { slug: slug },
    include: {
      techStacks: true,
      author: true
    }
  })


  if (!project) return null
  return project
}