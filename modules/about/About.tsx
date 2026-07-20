import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import Intro from "./components/Intro";
import Education from "./components/Education";

function About() {
  return (
    <PageAnimateWrapper>
      <div className='mx-auto max-w-6xl px-6 pt-8 pb-24'>
        <Intro />
        <Education />
      </div>
    </PageAnimateWrapper>
  );
}

export default About;
