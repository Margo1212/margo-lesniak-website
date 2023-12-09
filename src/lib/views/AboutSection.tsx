import Image from "next/image";
import { Title } from "@lib/components/Title/Title";
import Link from "next/link";
import { Button } from "@lib/components/Button/Button";
import { AboutSectionImgBt } from "@lib/assets/svg/AboutSectionImgBt";
import { AboutSectionImgStars } from "@lib/assets/svg/AboutSectionImgStars";
export const revalidate = 10;

export const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="bg-main-bg flex relative px-5 laptop:px-24 py-24"
    >
      <AboutSectionImgBt />
      <AboutSectionImgStars />
      <div className="w-1/3 hidden laptop:block h-full">
        <Image
          className="laptop:h-full object-cover"
          src="AboutImage.svg"
          alt="about"
          width={500}
          height={500}
        />
      </div>
      <div className="laptop:w-2/3 w-full flex flex-col laptop:items-start items-center justify-center  py-5 laptop:py-2 desktop:py-8 px-4 laptop:px-7 space-y-8">
        <h2 className="text-4xl text-white font-medium">O mnie</h2>
        <p className="text-md text-center laptop:text-left text-[#AAAEB6] break-words font-normal leading-relaxed">
          Witaj na mojej stronie! Jestem pasjonatką web developmentu, która z
          fascynacją i zapałem poznaje tajniki tworzenia nowoczesnych i
          innowacyjnych stron internetowych. Uczę się sztuki web developmentu od
          dwóch lat, a każdy dzień spędzony nad kodem to dla mnie okazja do
          odkrywania nowych możliwości. Przez ten czas zdobyłam doświadczenie w
          pracy z zaawansowanymi narzędziami, takimi jak Strapi CMS, Next.js,
          React oraz Typescript. Stawiam na kreatywność i funkcjonalność,
          starając się tworzyć strony, które nie tylko są przyjemne wizualnie,
          ale także są intuicyjne i przyjazne dla użytkownika. Zapraszam do
          zapoznania się z moją pracą i do odkrywania, jak technologia może stać
          się narzędziem do przekazywania unikalnych historii online. Jeśli
          jesteś zainteresowany współpracą lub masz pytania, śmiało skontaktuj
          się ze mną. Razem możemy stworzyć coś wyjątkowego!
        </p>

        <Button
          styles="px-6 py-3"
          href="/about"
          bg="primary"
          text="Zobacz więcej"
        />
      </div>
    </section>
  );
};
