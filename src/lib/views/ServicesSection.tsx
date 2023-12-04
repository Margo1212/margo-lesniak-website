import { ServiceSection1 } from "@lib/assets/svg/ServiceSection1";
import { ServiceSection2 } from "@lib/assets/svg/ServiceSection2";
import { Button } from "@lib/components/Button/Button";
import Image from "next/image";

export const revalidate = 10;

export const ServicesSection = () => {
  return (
    <section className="relative bg-main-bg flex flex-col laptop:py-14 items-center justify-center gap-y-20 px-5 laptop:px-24">
      <ServiceSection1 />
      <ServiceSection2 />
      <div className="text-center space-y-5">
        <h2 className="text-4xl text-white font-medium">
          Co mogę dla Ciebie zrobić
        </h2>
        <p className="text-sm text-center laptop:text-left text-white/90 break-words font-light leading-relaxed">
          Bez względu na branżę, wielkość firmy czy cele projektu, jestem gotówa
          dostarczyć Ci wysokiej jakości rozwiązania online.
        </p>
      </div>

      <div className="w-full grid tablet:grid-cols-2 gap-y-4 laptop:grid-cols-4 gap-x-5">
        <div className="border-[1px] border-white/10 bg-[#12001A] text-white/80 min-h-[429px] p-8 flex flex-col items-center gap-y-5">
          <div className="text-primary">
            <Image
              alt="service-1"
              src="service-1-icon.svg"
              width={75}
              height={75}
            />
          </div>
          <h3 className="text-xl font-bold">Tworzenie Stron Internetowych</h3>
          <ul className="list-image-[url(../../public/star.svg)] space-y-4 list-inside text-base">
            <li>
              Projektowanie i rozwijanie responsywnych stron internetowych.
            </li>
            <li> Tworzenie stron korporacyjnych, portfolio, blogów..</li>
          </ul>
        </div>
        <div className="border-[1px] border-white/10 bg-[#12001A] text-white/80 min-h-[429px] p-8 flex flex-col items-center gap-y-5">
          <div className="text-primary">
            <Image
              alt="service-2"
              src="service-2-icon.svg"
              width={75}
              height={75}
            />
          </div>
          <h3 className="text-xl font-bold">Strony oparte na CMS</h3>
          <ul className="list-image-[url(../../public/star.svg)] space-y-4 list-inside text-base">
            <li>
              Konfiguracja i dostosowywanie systemów zarządzania treścią (CMS),
              np. Strapi CMS, umożliwiających łatwe zarządzanie treścią strony.
            </li>
            <li>
              Integracja niestandardowych rozwiązań dla lepszej funkcjonalności.
            </li>
          </ul>
        </div>
        <div className="border-[1px] border-white/10 bg-[#12001A] text-white/80 min-h-[429px] p-8 flex flex-col items-center gap-y-5">
          <div className="text-primary">
            <Image
              alt="service-3"
              src="service-3-icon.svg"
              width={75}
              height={75}
            />
          </div>
          <h3 className="text-xl font-bold">Dostosowanie do SEO</h3>
          <ul className="list-image-[url(../../public/star.svg)] space-y-4 list-inside text-base">
            <li>Optymalizacja treści pod kątem wyszukiwarek internetowych.</li>
            <li>Implementacja tagów meta, mapy witryny itp.</li>
          </ul>
        </div>
        <div className="border-[1px] border-white/10 bg-[#12001A] text-white/80 min-h-[429px] p-8 flex flex-col items-center gap-y-5">
          <div className="text-primary">
            <Image
              alt="service-4"
              src="service-4-icon.svg"
              width={75}
              height={75}
            />
          </div>
          <h3 className="text-xl font-bold">Wsparcie Techniczne</h3>
          <ul className="list-image-[url(../../public/star.svg)] list-inside space-y-4 text-base">
            <li>Konsultacje dotyczące technologii internetowych.</li>
            <li>
              Szkolenia dla klientów w obszarze zarządzania stroną lub
              aplikacją.
            </li>
            <li>Świadczenie wsparcia technicznego.</li>
          </ul>
        </div>
      </div>
      <Button
        styles="px-6 py-3"
        href="/about"
        bg="primary"
        text="Zobacz więcej"
      />
    </section>
  );
};
