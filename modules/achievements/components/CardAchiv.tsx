export const dynamic = "force-dynamic";

import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { Achiv } from "../../../types/userTypes";
import { getAchievements } from "../services/getAchievements";

async function CardAchiv() {
  const { achievements } = await getAchievements();
  const t = await getTranslations("AchievementsPage");

  return (
    <div className='grid gap-px bg-border sm:grid-cols-2 md:grid-cols-3'>
      {achievements.map((achiev: Achiv, idx) => (
        <Link
          key={idx}
          href={achiev.url}
          target='_blank'
          className='group relative block bg-background p-6 transition-colors duration-200 hover:bg-surface'
        >
          <div className='relative aspect-4/3 w-full overflow-hidden bg-surface'>
            <Image
              src={achiev.url}
              alt={achiev.title || t("certificateAlt")}
              fill
              className='object-cover object-top'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <div className='mt-4 space-y-1'>
            <h3 className='font-heading text-sm font-medium tracking-tight text-foreground'>
              {achiev.title}
            </h3>
            <p className='text-xs text-foreground/80'>{achiev.publisher}</p>
            <p className='text-xs text-foreground-secondary/90'>
              {t("issued", { date: achiev.issuedOn })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardAchiv;
