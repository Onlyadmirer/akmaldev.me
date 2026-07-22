import { getTranslations } from "next-intl/server";
import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import GithubStats from "./components/GithubStats";
import UmamiStats from "./components/UmamiStats";

async function Dashboard() {
  const t = await getTranslations("DashboardPage");

  return (
    <PageAnimateWrapper>
      <div className='mx-auto max-w-6xl px-6 pt-8 pb-24'>
        <div className='mb-16'>
          <h1 className='font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl'>
            {t("title")}
          </h1>
          <p className='mt-3 max-w-lg text-base text-foreground-secondary'>
            {t("description")}
          </p>
        </div>
        <GithubStats />
        <UmamiStats />
      </div>
    </PageAnimateWrapper>
  );
}

export default Dashboard;
