import getProject from "@/modules/projects/services/getProject";
import ProjectRow from "./ProjectRow";

async function ProjectList() {
  const { userProjects } = await getProject();

  return (
    <div className='divide-y divide-border'>
      {userProjects.map((project, idx) => (
        <ProjectRow
          key={project.slug}
          index={idx + 1}
          slug={project.slug}
          title={project.title}
          description={project.description}
          image={project.image}
          stack={project.stack}
        />
      ))}
    </div>
  );
}

export default ProjectList;
