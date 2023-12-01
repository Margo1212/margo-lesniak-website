import Link from "next/link";
import Image from "next/image";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Logo } from "@lib/assets/svg/Logo";
import { SocialMedia } from "../SocialMedia/SocialMedia";
export const revalidate = 10;
export type NavProps = {
  nav: any;
};

const Navigation = ({ nav }: NavProps) => {
  return (
    <nav className="w-full flex px-10 justify-between items-center bg-[#f8f8f8] text-dark-blue tablet:text-xs desktop:text-sm font-medium desktop:px-14">
      <div className="tablet:h-20 tablet:w-24 w-14 h-12">
        <Link aria-label="Link to homepage" href="/">
          {nav.logo?.data !== undefined ? (
            <Image
              className="w-full h-full object-cover"
              src={nav.logo?.data?.attributes.url}
              alt={nav.logo?.data?.attributes.alternativeText}
              width={nav.logo?.data?.attributes.width}
              height={nav.logo?.data?.attributes.height}
            />
          ) : (
            <Logo />
          )}
        </Link>
      </div>

      <HamburgerMenu />

      <ul className="hidden tablet:px-10 desktop:px-24 space-x-4 align-middle py-5 laptop:flex flex-row justify-between">
        <li>
          <Link aria-label="Link to home page" href="/">
            Strona główna
          </Link>
        </li>
        <li>
          <Link aria-label="Link to about page" href="/about">
            O nas
          </Link>
        </li>
        <li>
          <Link aria-label="Link to about services page" href="/about-services">
            O usługach
          </Link>
        </li>
        <li>
          <Link aria-label="Link to gallery" href="/gallery">
            Galeria
          </Link>
        </li>
        <li>
          <Link aria-label="Link to price-list" href="/price-list">
            Cennik
          </Link>
        </li>
        <li>
          <Link aria-label="Link to products page" href="/products">
            Produkty
          </Link>
        </li>
        <li>
          <Link aria-label="Link to news page" href="/news">
            Nowośći
          </Link>
        </li>
        <li>
          <Link aria-label="Link to vouchers page" href="/vouchers">
            <p className="text-wrapper">Bony podarunkowe</p>
          </Link>
        </li>
        <li>
          <Link aria-label="Link to contact page" href="/contact">
            Kontakt
          </Link>
        </li>
      </ul>
      <SocialMedia isVisibleOnTablet={false} color="dark" />
    </nav>
  );
};

export default Navigation;
