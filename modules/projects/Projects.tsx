import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import ProjectList from "./components/ProjectList";

function Projects() {
  return (
    <PageAnimateWrapper>
      <div className='mx-auto max-w-6xl px-6 pt-8 pb-24'>
        <div className='mb-16'>
          <h1 className='font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl'>
            Work
          </h1>
          <p className='mt-3 max-w-lg text-base text-foreground-secondary'>
            Selected projects I&apos;ve built and contributed to.
          </p>
        </div>
        <ProjectList />
      </div>
    </PageAnimateWrapper>
  );
}

export default Projects;
