import Link from "next/link";
import { Button } from "../Button/Button";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Logo } from "@lib/assets/svg/Logo";
import { LogoMin } from "@lib/assets/svg/Logo-min";

export const revalidate = 10;

const Navigation = () => {
  return (
    <nav className="w-full h-auto flex justify-between items-center bg-[#180022] laptop:text-xs desktop:text-sm font-medium px-10 py-2 laptop:py-3 laptop:px-24">
      <div className="hidden h-full laptop:flex items-center">
        <Link aria-label="Link to homepage" href="/">
          <Logo />
        </Link>
      </div>
      <div className="laptop:hidden  flex items-center">
        <Link aria-label="Link to homepage" href="/">
          <LogoMin />
        </Link>
      </div>

      <HamburgerMenu />

      <ul className="hidden text-white font-medium  space-x-10 align-middle py-5 laptop:flex flex-row justify-between">
        <li>
          <Link aria-label="Link to home" href="/">
            Strona Główna
          </Link>
        </li>
        <li>
          <Link aria-label="Link to about page" href="/about">
            O mnie
          </Link>
        </li>
        <li>
          <Link aria-label="Link to gallery" href="/offer">
            Oferta
          </Link>
        </li>
        <li>
          <Link aria-label="Link to news page" href="#">
            Blog
          </Link>
        </li>
        <li>
          <Link aria-label="Link to news page" href="#">
            Projekty
          </Link>
        </li>

        <li>
          <Button
            styles="py-3 px-7"
            text="Skontaktuj się ze mną"
            bg="secondary"
            href="#"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
