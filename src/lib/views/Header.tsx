import { Woman } from "@lib/assets/svg/Woman";
import { Button } from "@lib/components/Button/Button";
import { SocialMedia } from "@lib/components/SocialMedia/SocialMedia";
import { Title } from "@lib/components/Title/Title";

export const revalidate = 10;
export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <header className="relative w-full laptop:px-8 px-5 tablet:px-0 scroll-smooth flex flex-col-reverse items-center laptop:flex-row gap-y-5 laptop:gap-y-0 py-24">
      <div className="w-full laptop:w-1/2 flex flex-col justify-center gap-y-10 laptop:gap-y-16">
        <div className="space-y-4 laptop:space-y-8 flex flex-col">
          <p className="text-primary text-center laptop:text-left text-xl font-semibold">
            Cześć, jestem Margo
          </p>
          <Title>
            Projektuję{" "}
            <span className="text-secondary">Strony Internetowe</span> z Pasją i
            Innowacyjnością
          </Title>
          <p className="text-[#AAAEB6] desktop:text-lg  text-center laptop:text-left font-normal leading-6 tracking-wider laptop:pr-12">
            Tworzę strony internetowe, które wyróżnią Cię w kosmicznej
            przestrzeni online. Twoja firma zasługuje na projekt, który
            przekracza granice.
          </p>
        </div>
        <div className="laptop:space-x-5 space-y-5 laptop:space-y-0 flex flex-col laptop:flex-row ">
          <Button
            styles="px-6 py-3"
            text="Więcej o tym co robię"
            bg="secondary"
            href="#"
          />
          <SocialMedia />
        </div>
      </div>
      <div className="laptop:w-1/2 h-full flex justify-center items-center">
        <Woman />
      </div>
    </header>
  );
};
