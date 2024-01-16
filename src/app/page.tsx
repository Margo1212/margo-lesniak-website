import { getFaq } from "@lib/data/faq";
import { AboutSection } from "@lib/views/AboutSection";
import { FaqSection } from "@lib/views/FaqSection";
import { Header } from "@lib/views/Header";
import { ServicesSection } from "@lib/views/ServicesSection";
import { WhyMe } from "@lib/views/WhyMe";

export default async function Home() {
  const faqData = await getFaq();
  const faq = faqData[0].question;
  return (
    <>
      <Header />
      <WhyMe />
      <AboutSection />
      <ServicesSection />
      <FaqSection faq={faq} />
    </>
  );
}
