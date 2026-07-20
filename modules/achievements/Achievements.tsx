import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import CardAchiv from "./components/CardAchiv";
import AddAchiev from "./components/AddAchiev";

function Achievements() {
  return (
    <PageAnimateWrapper>
      <div className='mx-auto max-w-6xl px-6 pt-8 pb-24'>
        <div className='mb-16'>
          <h1 className='font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl'>
            Achievements
          </h1>
          <p className='mt-3 max-w-lg text-base text-foreground-secondary'>
            Certificates and badges from my academic and professional journey.
          </p>
        </div>
        <AddAchiev />
        <CardAchiv />
      </div>
    </PageAnimateWrapper>
  );
}

export default Achievements;
