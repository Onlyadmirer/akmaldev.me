import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Section from "@/common/components/elements/Section";

async function EducationTimeline() {
  const t = await getTranslations("HomePage.Education");
  const about = await getTranslations("AboutPage");

  const entries = [
    {
      logo: "/images/about/sman3ekg.png",
      alt: "SMAN 3 Enrekang",
      period: about("highSchoolPeriod"),
      institution: about("highSchool"),
      major: about("highSchoolMajor"),
      location: about("highSchoolLocation"),
    },
    {
      logo: "/images/about/hasanuddin.PNG",
      alt: "Hasanuddin University",
      period: about("universityPeriod"),
      institution: about("university"),
      major: about("universityMajor"),
      location: about("universityLocation"),
    },
  ];

  return (
    <Section
      title={t("title")}
      subtitle={t("subtitle")}
      asideLabel={t("readMore")}
      asideHref='/about'
      className='border-t border-border'
    >
      <ol className='relative space-y-8 border-l border-border pl-8'>
        {entries.map((entry) => (
          <li key={entry.institution} className='relative'>
            <span
              aria-hidden
              className='absolute top-2 -left-[35px] h-2 w-2 rounded-full bg-foreground ring-4 ring-background'
            />
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6'>
              <div className='relative h-12 w-12 shrink-0 overflow-hidden'>
                <Image
                  src={entry.logo}
                  alt={entry.alt}
                  fill
                  className='object-contain p-1'
                  sizes='48px'
                />
              </div>
              <div className='min-w-0'>
                <span className='font-heading text-xs font-medium text-foreground-secondary/60'>
                  {entry.period}
                </span>
                <h3 className='mt-0.5 font-heading text-base font-medium tracking-tight text-foreground'>
                  {entry.institution}
                </h3>
                <p className='mt-0.5 text-sm text-foreground-secondary'>
                  {entry.major}
                </p>
                <p className='text-sm text-foreground-secondary/60'>
                  {entry.location}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default EducationTimeline;
