import { Rocket } from "@lib/assets/svg/Rocket-main";
import { RocketMin } from "@lib/assets/svg/Rocket-min";
import { Stars } from "@lib/assets/svg/Stars";
import { Button } from "@lib/components/Button/Button";
import { SocialMedia } from "@lib/components/SocialMedia/SocialMedia";
import { Title } from "@lib/components/Title/Title";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

export const revalidate = 10;
export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <header className="relative w-full px-5 scroll-smooth bg-main-bg flex flex-col-reverse items-center laptop:flex-row gap-y-7 laptop:gap-y-0  laptop:px-24 pt-10 pb-32">
      <Stars position="up" />
      <Stars position="down" />
      <Link
        className="absolute bottom-5 laptop:bottom-10 desktop:bottom-24 left-1/2 transform -translate-x-1/2 "
        href="#about-section"
      >
        <RocketMin />
      </Link>
      <div className="w-full laptop:w-1/2 flex flex-col justify-center gap-y-16">
        <div className="space-y-6 flex flex-col">
          <p className="text-primary text-center laptop:text-left">
            Label goes here
          </p>
          <Title>Twoja Strona, Moja Kosmiczna Historia</Title>
          <p className="text-[#CCCCCC] text-lg text-center laptop:text-left font-light leading-6 tracking-wider laptop:pr-12">
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
      <div className="w-1/2 laptop:w-1/2 flex justify-center">
        <div className="flex justify-end items-center">
          <Image
            className="w-full object-cover h-full laptop:w-3/4 desktop:w-full shadow-md"
            src="Rocket.svg"
            alt="Rocket"
            width={472}
            height={486}
          />
        </div>
      </div>
    </header>
  );
};
