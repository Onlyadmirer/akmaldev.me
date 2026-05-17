import ProjectDetailView from "@/modules/projects/slug/ProjectDetailView";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: Props) {
  const resolvedParams = await params;

  const slug = resolvedParams.slug;

  return <ProjectDetailView slug={slug} />;
}
