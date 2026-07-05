import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import AboutHeader from "./components/AboutHeader";
import Education from "./components/Education";
import Intro from "./components/Intro";

function About() {
  return (
    <PageAnimateWrapper>
      <AboutHeader />
      <Intro />
      <Education />
    </PageAnimateWrapper>
  );
}

export default About;
