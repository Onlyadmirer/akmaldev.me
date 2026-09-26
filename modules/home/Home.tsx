import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import Hero from "./components/Hero";
import AboutSummary from "./components/AboutSummary";
import FeaturedProjects from "./components/FeaturedProjects";
import Stack from "./components/Stack";
import LatestAchievements from "./components/LatestAchievements";
import EducationTimeline from "./components/EducationTimeline";
import ContactCta from "./components/ContactCta";

function Home() {
  return (
    <PageAnimateWrapper>
      <Hero />
      <AboutSummary />
      <FeaturedProjects />
      <Stack />
      <LatestAchievements />
      <EducationTimeline />
      <ContactCta />
    </PageAnimateWrapper>
  );
}

export default Home;
