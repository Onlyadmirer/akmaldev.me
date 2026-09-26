import { prisma } from "@/lib/prisma";
import { OWNER_EMAIL } from "@/common/constants/owner";
import type { Projects } from "@/types/userTypes";

const PREVIEW_LIMIT = 3;

export const parseIssuedOn = (value: string) => {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? null : new Date(timestamp);
};

export const getHomeData = async () => {
  const user = await prisma.user.findUnique({
    where: { email: OWNER_EMAIL },
    include: {
      projects: {
        orderBy: { createdAt: "desc" },
        take: PREVIEW_LIMIT,
        include: { techStacks: true },
      },
      achievements: true,
    },
  });

  const projects: Projects[] = (user?.projects ?? []).map((project) => ({
    title: project.title,
    image: project.image,
    slug: project.slug,
    description: project.description,
    url: project.url,
    stack: project.techStacks.map((tech) => tech.name),
  }));

  const achievements = (user?.achievements ?? [])
    .map((achievement) => ({
      title: achievement.title,
      url: achievement.url,
      publisher: achievement.publisher,
      issuedOn: achievement.issuedOn,
      issuedAt: parseIssuedOn(achievement.issuedOn),
    }))
    .sort((a, b) => {
      if (!a.issuedAt || !b.issuedAt) return 0;
      return b.issuedAt.getTime() - a.issuedAt.getTime();
    })
    .slice(0, PREVIEW_LIMIT);

  return { projects, achievements };
};
