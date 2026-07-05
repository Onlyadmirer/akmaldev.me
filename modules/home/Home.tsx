import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Skils from "./components/Skils";

function Home() {
  return (
    <PageAnimateWrapper>
      <Header />
      <Skils />
      <Featured />
    </PageAnimateWrapper>
  );
}

export default Home;
