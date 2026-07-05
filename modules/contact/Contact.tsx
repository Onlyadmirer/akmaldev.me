import PageAnimateWrapper from "@/common/components/elements/PageAnimateWrapper";
import ContactHeader from "./components/ContactHeader";
import FormSection from "./components/FormSection";
import SocialMediaSection from "./components/SocialMediaSection";

function Contact() {
  return (
    <PageAnimateWrapper>
      <ContactHeader />
      <SocialMediaSection />
      <FormSection />
    </PageAnimateWrapper>
  );
}

export default Contact;
