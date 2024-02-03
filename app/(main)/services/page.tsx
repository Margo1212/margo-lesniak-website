import { getStages } from "@/lib/stages";
import { OfferSection } from "@/ui/views/OfferSection";
import { StagesSection } from "@/ui/views/StagesSection";
import { getTechnologies } from "@lib/technologies";
import { NextBreadcrumb } from "@ui/components/Breadcrumbs/Breadcrumbs";
import { PagesTitle } from "@ui/components/PagesTitle/PagesTitle";
import { TechnologiesSection } from "@ui/views/TechnologiesSection";

export const generateMetadata = async () => {
  return {
    title: "Margo Leśniak | Usługi",
    description:
      "Kompleksowe usługi tworzenia nowoczesnych stron internetowych, oparte na zaawansowanych technologiach.Skupiam się na dostarczaniu innowacyjnych, responsywnych i wydajnych rozwiązań. Ze mną każda strona staje się unikatowym doświadczeniem online. Sprawdź, jak mogę wzmocnić Twój wizerunek w sieci!",
    keywords: [
      "Tworzenie responsywnych stron internetowych z Next.js i Strapi CMS",
      "Projektowanie responsywnych stron",
      "Personalizowane rozwiązania webowe oparte na TypeScript",
      "Tworzenie zoptymalizowanych stron pod kątem SEO z Next.js",
      "Responsywne projektowanie stron",
      "cms",
      "Strony internetowe oparte na Jamstack z użyciem Next.js i Strapi",
      "Zoptymalizowane strony dla SEO",
      "Strony internetowe dla firmy kraków",
    ],
  };
};

export default async function Services() {
  const technologiesData = await getTechnologies();
  const stagesData = await getStages();
  const technologies = technologiesData[0]?.tech;
  return (
    <section className=" px-5 laptop:px-0 gap-3 pt-10 pb-32 space-y-10">
      <PagesTitle>Usługi</PagesTitle>
      <NextBreadcrumb
        homeElement={"Strona Główna"}
        separator={
          <svg className="w-6 h-6 text-text" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            ></path>
          </svg>
        }
        activeClasses="text-amber-500"
        containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
        listClasses="hover:underline mx-2 font-bold text-text"
        capitalizeLinks
      />
      <OfferSection />
      <TechnologiesSection technologies={technologies} />
      <StagesSection stages={stagesData} />
    </section>
  );
}
