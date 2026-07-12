import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("HomePage.Header");

  return (
    <div className='pb-6 space-y-4 border-b border-primary/50'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-medium'>{t("greeting")}</h1>
        <ul className='flex flex-col ml-5 list-disc gap-1 lg:gap-12 text-neutral-700 dark:text-neutral-400 lg:flex-row'>
          <li>{t("location")}</li>
          <li>{t("workMode")}</li>
        </ul>
      </div>
      <div>
        <p className='leading-7  text-description'>{t("description")}</p>
      </div>
    </div>
  );
}

export default Header;
