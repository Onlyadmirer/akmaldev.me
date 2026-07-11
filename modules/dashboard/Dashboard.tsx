import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import DashboardHeader from "./components/DashboardHeader";
import GithubStats from "./components/GithubStats";
import UmamiStats from "./components/UmamiStats";

function Dashboard() {
  return (
    <PageAnimateWrapper>
      <DashboardHeader />
      <GithubStats />
      <UmamiStats />
    </PageAnimateWrapper>
  );
}

export default Dashboard;
