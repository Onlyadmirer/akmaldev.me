import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import ProjectCards from "./components/ProjectCards";
import ProjectsHeader from "./components/ProjectsHeader";

function Projects() {
  return (
    <PageAnimateWrapper>
      <ProjectsHeader />
      <ProjectCards />
    </PageAnimateWrapper>
  );
}

export default Projects;
