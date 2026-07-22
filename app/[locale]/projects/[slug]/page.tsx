import ProjectDetailView from "@/modules/projects/slug/ProjectDetailView";
import getProjectDetail from "@/modules/projects/services/getProjectDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectDetail(slug);

  if (!project) {
    return { title: "Not Found" };
  }

  return {
    title: project.title,
    description: project.description,

    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://www.akmaldev.me/projects/${slug}`,
      siteName: "Akmaldev",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetailView slug={slug} />;
}
