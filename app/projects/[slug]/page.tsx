import getProjectDetail from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

async function ProjectDetail({ params }: Props) {
  const resolvedParams = await params;

  const slug = resolvedParams.slug;

  const project = await getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
}

export default ProjectDetail;
