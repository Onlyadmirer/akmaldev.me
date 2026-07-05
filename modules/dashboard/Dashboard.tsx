import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import DashboardHeader from "./components/DashboardHeader";
import GithubStats from "./components/GithubStats";

function Dashboard() {
  return (
    <PageAnimateWrapper>
      <DashboardHeader />
      <GithubStats />
    </PageAnimateWrapper>
  );
}

export default Dashboard;
