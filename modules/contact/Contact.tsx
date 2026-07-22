import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import SocialMediaSection from "./components/SocialMediaSection";
import FormSection from "./components/FormSection";

function Contact() {
  return (
    <PageAnimateWrapper>
      <div className='mx-auto max-w-6xl px-6 pt-8 pb-24'>
        <div className='mb-16'>
          <h1 className='font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl'>
            Contact
          </h1>
          <p className='mt-3 max-w-lg text-base text-foreground-secondary'>
            Get in touch. I&apos;m always open to new opportunities and
            collaborations.
          </p>
        </div>
        <div className='grid gap-16 md:grid-cols-2'>
          <SocialMediaSection />
          <FormSection />
        </div>
      </div>
    </PageAnimateWrapper>
  );
}

export default Contact;
