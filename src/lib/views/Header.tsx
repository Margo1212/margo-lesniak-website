import { Button } from "@lib/components/Button/Button";
import { SocialMedia } from "@lib/components/SocialMedia/SocialMedia";
import { Title } from "@lib/components/Title/Title";
import Image from "next/image";

export const revalidate = 10;
export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <header className="relative w-full laptop:px-8 px-5 scroll-smooth flex flex-col-reverse items-center laptop:flex-row gap-y-5 laptop:gap-y-0 py-24">
      <div className="w-full laptop:w-1/2 flex flex-col justify-center gap-y-10 laptop:gap-y-16">
        <div className="space-y-3 laptop:space-y-6 flex flex-col">
          <p className="text-primary text-center laptop:text-left">
            Label goes here
          </p>
          <Title>Web Development w Harmonii z Twoimi Oczekiwaniami</Title>
          <p className="text-[#AAAEB6] text-base  text-center laptop:text-left font-normal leading-6 tracking-wider laptop:pr-12">
            Tworzę strony internetowe, które wyróżnią Cię w kosmicznej
            przestrzeni online. Twoja firma zasługuje na projekt, który
            przekracza granice.
          </p>
        </div>
        <div className="laptop:space-x-5 space-y-5 laptop:space-y-0 flex flex-col laptop:flex-row ">
          <Button styles="px-6 py-3" text="Order now" bg="secondary" href="#" />
          <Button styles="px-6 py-3" text="Explore" bg="primary" href="#" />
          <SocialMedia />
        </div>
      </div>
      <div className="laptop:w-1/2 h-full flex justify-center items-center">
        <Image
          className="w-full object-cover h-full desktop:w-full"
          src="woman.svg"
          alt="woman"
          width={450}
          height={464}
        />
      </div>
    </header>
  );
};
