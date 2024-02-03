import { Button } from "../components/Button/Button";

export const OfferSection = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h3 className="text-white text-4xl">Oferta</h3>
      <p className="text-text">
        Witajcie w świecie nowoczesnych technologii, gdzie tworzę strony
        internetowe, które nie tylko wyróżniają się wizualnie, ale także są
        oparte na najnowszych i najbardziej zaawansowanych narzędziach. Poniżej
        przedstawiamy, jakie technologie wykorzystuję, aby Wasze projekty były
        nie tylko zgodne z najnowszymi standardami, ale także oferowały
        wyjątkowe doświadczenia użytkownika.
      </p>
      <div className="flex flex-col gap-y-5 ">
        <h4 className="text-text text-2xl font-bold">
          Strapi CMS dla Intuicyjnego Zarządzania Treścią
        </h4>
        <h5 className="text-text">Headless CMS</h5>
        <p className="text-text">
          Zaawansowane i łatwe w obsłudze zarządzanie treściami dzięki Strapi
          CMS. Tworzę headless CMS, co umożliwia elastyczne zarządzanie
          treściami bez konieczności ingerencji w strukturę strony.
        </p>
        <h5 className="text-text">Personalizowane API</h5>
        <p className="text-text">
          Strapi umożliwia mi tworzenie niestandardowych API, dostosowanych do
          specyfiki Waszych potrzeb. Dzięki temu, możecie swobodnie integrować
          różnorodne treści, od blogów po galerie zdjęć.
        </p>
        <h4 className="text-text text-2xl font-bold">
          Next.js 14: Dynamiczne Interfejsy i Wydajność na Najwyższym Poziomie
          dla Optymalizacji SEO
        </h4>
        <h5 className="text-text">
          Server-side Rendering (SSR) i Static Site Generation (SSG)
        </h5>
        <p className="text-text">
          SSR dla Szybkiego Renderowania na Serwerze Next.js 14 umożliwia
          Server-side Rendering, co oznacza, że treści są generowane na
          serwerze, zamiast w przeglądarce użytkownika. To przekłada się na
          błyskawiczne ładowanie treści i zminimalizowane opóźnienia. Treści
          generowane po stronie serwera są łatwiejsze do indeksowania przez
          roboty wyszukiwarek, co zwiększa widoczność strony w wynikach
          wyszukiwania.
        </p>
        <p className="text-text">
          SSG dla Zoptymalizowanych Stron Statycznych Next.js 14 wspiera również
          Static Site Generation, co pozwala na generowanie statycznych stron
          podczas budowania projektu. To idealne rozwiązanie dla stron, które
          rzadko się zmieniają, zapewniając niesamowitą prędkość ładowania.
        </p>
        <Button
          styles="w-[350px] px-6 py-3"
          text={"Potrzebujesz Pomocy?"}
          bg={"primary"}
          href={"/contact"}
        />
      </div>
    </div>
  );
};
