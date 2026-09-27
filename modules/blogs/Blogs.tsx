import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import BlogList from "./components/BlogList";
import { getTranslations } from "next-intl/server";

async function Blogs() {
  const t = await getTranslations("Blog");

  return (
    <PageAnimateWrapper>
      <div className='mx-auto min-h-screen max-w-6xl px-6 pt-8 pb-24'>
        <div className='mb-16'>
          <h1 className='font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl'>
            Blogs
          </h1>
          <p className='mt-3 max-w-lg text-base text-foreground-secondary'>
            {t("description")}
          </p>
        </div>
        <BlogList />
      </div>
    </PageAnimateWrapper>
  );
}

export default Blogs;
