import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import AchivHeader from "./components/AchivHeader";
import CardAchiv from "./components/CardAchiv";
import AddAchiev from "./components/AddAchiev";

function Achievements() {
  return (
    <PageAnimateWrapper>
      <AchivHeader />
      <AddAchiev />
      <CardAchiv />
    </PageAnimateWrapper>
  );
}

export default Achievements;
