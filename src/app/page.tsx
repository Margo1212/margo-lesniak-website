import { getFaq } from "@lib/data/faq";
import { AboutSection } from "@lib/views/AboutSection";
import { FaqSection } from "@lib/views/FaqSection";
import { Header } from "@lib/views/Header";
import { ServicesSection } from "@lib/views/ServicesSection";
import { WhyMe } from "@lib/views/WhyMe";

export const generateMetadata = async () => {
  return {
    title:
      "Margo Leśniak | Nowoczesne strony internetowe | Web Development w Harmonii z Twoimi Oczekiwaniami",
    description:
      "Oferuję profesjonalne usługi tworzenia nowoczesnych stron internetowych opartych na nowoczesnych technologiach, takich jak Next.js, Strapi i TypeScript. Moje rozwiązania są nie tylko innowacyjne, ale także zoptymalizowane pod kątem wydajności i responsywności. Zainwestuj w unikalny projekt online ze mną, i ja zadbam o każdy detal od projektu strony internetowqej po wdrożenie.",
    keywords: [
      "Next.js",
      "React",
      "Strapi TypeScript",
      "Nowoczesne strony internetowe",
      "Responsywne projektowanie stron",
      "cms",
      "web development",
      "Zoptymalizowane strony dla SEO",
    ],
  };
};

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
