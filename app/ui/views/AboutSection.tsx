import Image from "next/image";
import { Button } from "../components/Button/Button";

export const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="flex relative px-5 tablet:px-0 laptop:px-8 gap-x-5 py-24 laptop:items-center"
    >
      <div className="laptop:w-2/5 desktop:w-1/3 laptop:block laptop:justify-center hidden h-full">
        <Image
          className="laptop:h-full object-cover w-full"
          src="AboutImage.svg"
          alt="about"
          width={400}
          height={400}
        />
      </div>
      <div className="laptop:w-2/3 w-full flex flex-col items-center laptop:items-start justify-between space-y-8">
        <h2 className="text-4xl text-white font-medium">O mnie</h2>
        <p className="text-base  text-center laptop:text-left text-[#AAAEB6] break-words font-normal leading-relaxed">
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
          href="/projects"
          bg="primary"
          text="Zobacz moje projekty 💚"
        />
      </div>
    </section>
  );
};
