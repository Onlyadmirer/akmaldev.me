import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Featured from "./components/Featured";

function Home() {
  return (
    <PageAnimateWrapper>
      <Hero />
      <Skills />
      <Featured />
    </PageAnimateWrapper>
  );
}

export default Home;
