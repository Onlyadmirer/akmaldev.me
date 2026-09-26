import { getFormatter, getTranslations } from "next-intl/server";
import Image from "next/image";
import Section from "@/common/components/elements/Section";
import { getHomeData } from "../services/getHomeData";

async function LatestAchievements() {
  const t = await getTranslations("HomePage.Achievements");
  const issued = await getTranslations("AchievementsPage");
  const format = await getFormatter();
  const { achievements } = await getHomeData();

  return (
    <Section
      title={t("title")}
      subtitle={t("subtitle")}
      asideLabel={t("viewAll")}
      asideHref='/achievements'
      className='border-t border-border'
    >
      {achievements.length === 0 ? (
        <p className='text-sm text-foreground-secondary'>{t("empty")}</p>
      ) : (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {achievements.map((achievement) => (
            <a
              key={achievement.url}
              href={achievement.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group border border-border bg-surface transition-colors duration-200 hover:bg-background'
            >
              <div className='relative aspect-4/3 w-full overflow-hidden bg-background'>
                <Image
                  src={achievement.url}
                  alt={achievement.title || issued("certificateAlt")}
                  fill
                  className='object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                />
              </div>
              <div className='space-y-1 p-4'>
                <h3 className='line-clamp-2 font-heading text-sm font-medium tracking-tight text-foreground'>
                  {achievement.title}
                </h3>
                <p className='text-xs text-foreground/80'>{achievement.publisher}</p>
                <p className='text-xs text-foreground-secondary/90'>
                  {issued("issued", {
                    date: achievement.issuedAt
                      ? format.dateTime(achievement.issuedAt, {
                          year: "numeric",
                          month: "short",
                        })
                      : achievement.issuedOn,
                  })}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}

export default LatestAchievements;
