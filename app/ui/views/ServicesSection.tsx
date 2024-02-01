import { FaRegListAlt } from "react-icons/fa";
import {
  MdOutlineDevicesOther,
  MdOutlineScreenSearchDesktop,
  MdOutlineSupport,
} from "react-icons/md";
import { Button } from "../components/Button/Button";

export const ServicesSection = () => {
  return (
    <section className="relative  flex flex-col laptop:py-14 items-center justify-center gap-y-20 px-5 tablet:px-0 ">
      <div className="text-center  space-y-5">
        <h2 className="text-4xl text-white font-medium">
          Co mogę dla Ciebie zrobić
        </h2>
        <p className=" text-center laptop:text-left text-white/90 break-words font-light leading-relaxed">
          Bez względu na branżę, wielkość firmy czy cele projektu, jestem gotówa
          dostarczyć Ci wysokiej jakości rozwiązania online.
        </p>
      </div>

      <div className="w-full grid tablet:grid-cols-2 gap-y-8 laptop:grid-cols-4 gap-x-8">
        <div className=" hover:bg-[#282930]/20 duration-200 text-white min-h-[429px] px-4 py-8 flex flex-col items-center gap-y-5  rounded-3xl shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35]">
          <div className="text-primary shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] p-8 rounded-xl">
            <MdOutlineDevicesOther
              style={{ fontSize: "48px", color: "#8C33FF" }}
            />
          </div>
          <h3 className="text-xl text-center font-bold">
            Tworzenie Stron Internetowych
          </h3>
          <ul className="list-image-[url(/star.svg)] space-y-4 list-inside text-base">
            <li>
              Projektowanie i rozwijanie responsywnych stron internetowych.
            </li>
            <li> Tworzenie stron korporacyjnych, portfolio, blogów.</li>
          </ul>
        </div>
        <div className="hover:bg-[#282930]/20 duration-200 shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] rounded-3xl  text-white min-h-[429px] px-4 py-8 flex flex-col items-center gap-y-5">
          <div className="text-primary shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] p-8 rounded-xl">
            <FaRegListAlt style={{ fontSize: "48px", color: "#8C33FF" }} />
          </div>
          <h3 className="text-xl text-center font-bold">
            Strony oparte na CMS
          </h3>
          <ul className="list-image-[url(/star.svg)] space-y-4 list-inside text-base">
            <li>
              Konfiguracja i dostosowywanie systemów zarządzania treścią (CMS),
              np. Strapi CMS, umożliwiających łatwe zarządzanie treścią strony.
            </li>
            <li>
              Integracja niestandardowych rozwiązań dla lepszej funkcjonalności.
            </li>
          </ul>
        </div>
        <div className="hover:bg-[#282930]/20 duration-200 shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] rounded-3xl text-white  min-h-[429px] px-4 py-8 flex flex-col items-center gap-y-5">
          <div className="text-primary shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] p-8 rounded-xl">
            <MdOutlineScreenSearchDesktop
              style={{ fontSize: "48px", color: "#8C33FF" }}
            />
          </div>
          <h3 className="text-xl font-bold text-center">Dostosowanie do SEO</h3>
          <ul className="list-image-[url(/star.svg)] space-y-4 list-inside text-base">
            <li>Optymalizacja treści pod kątem wyszukiwarek internetowych.</li>
            <li>Implementacja tagów meta, mapy witryny itp.</li>
          </ul>
        </div>
        <div className="hover:bg-[#282930]/20 duration-200 shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] rounded-3xl  text-white  min-h-[429px] px-4 py-8 flex flex-col items-center gap-y-5">
          <div className="text-primary shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] p-8 rounded-xl">
            <MdOutlineSupport style={{ fontSize: "48px", color: "#8C33FF" }} />
          </div>
          <h3 className="w-full text-xl font-bold text-center">
            Wsparcie Techniczne
          </h3>
          <ul className="list-image-[url(/star.svg)] list-inside space-y-4 text-base">
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
