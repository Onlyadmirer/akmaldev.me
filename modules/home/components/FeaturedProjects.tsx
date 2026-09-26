import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LuArrowUpRight } from "react-icons/lu";
import Section from "@/common/components/elements/Section";
import { getHomeData } from "../services/getHomeData";

async function FeaturedProjects() {
  const t = await getTranslations("HomePage.Projects");
  const { projects } = await getHomeData();

  return (
    <Section
      title={t("title")}
      subtitle={t("subtitle")}
      asideLabel={t("viewAll")}
      asideHref='/projects'
      className='border-t border-border'
    >
      {projects.length === 0 ? (
        <p className='text-sm text-foreground-secondary'>{t("empty")}</p>
      ) : (
        <div className='divide-y divide-border border-t border-border'>
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className='group grid grid-cols-[auto_1fr] items-start gap-4 py-6 transition-opacity duration-200 hover:opacity-70 md:grid-cols-[auto_1fr_240px] md:gap-8'
            >
              <span className='font-heading text-xs font-medium tabular-nums text-foreground-secondary/60 md:text-sm'>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className='min-w-0'>
                <div className='flex items-center gap-2'>
                  <h3 className='truncate font-heading text-lg font-medium tracking-tight text-foreground md:text-xl'>
                    {project.title}
                  </h3>
                  <LuArrowUpRight
                    size={16}
                    className='hidden shrink-0 text-foreground-secondary transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block'
                  />
                </div>
                <p className='mt-1.5 line-clamp-2 text-sm leading-relaxed text-foreground-secondary'>
                  {project.description}
                </p>
                {project.stack.length > 0 && (
                  <div className='mt-3 flex flex-wrap gap-1.5'>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground-secondary'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className='relative col-start-2 aspect-16/10 w-full overflow-hidden bg-surface ring-1 ring-border md:col-start-3 md:aspect-4/3'>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                    sizes='(max-width: 768px) 100vw, 240px'
                  />
                ) : (
                  <div className='flex h-full w-full items-center justify-center text-xs text-foreground-secondary/60'>
                    {project.title}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}

export default FeaturedProjects;
