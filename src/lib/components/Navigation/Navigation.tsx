import Link from "next/link";
import { Button } from "../Button/Button";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { LogoCh } from "@lib/assets/svg/Logo-ch";
import { LogoMin } from "@lib/assets/svg/Logo-min";

export const revalidate = 10;

const Navigation = () => {
  return (
    <nav className=" w-full h-auto flex justify-between items-center bg-main-bg laptop:text-xs desktop:text-sm font-medium px-10 py-2 laptop:py-3 laptop:px-24">
      <div className="hidden h-full laptop:flex items-center">
        <Link aria-label="Link to homepage" href="/">
          <LogoCh />
        </Link>
      </div>
      <div className="laptop:hidden  flex items-center">
        <Link aria-label="Link to homepage" href="/">
          <LogoMin />
        </Link>
      </div>

      <HamburgerMenu />

      <ul className="hidden text-white font-normal  space-x-10 align-middle py-5 laptop:flex flex-row justify-between tracking-wide">
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
          <Link aria-label="Link to projects " href="/projects">
            Projekty
          </Link>
        </li>

        <li>
          <Button
            styles="py-3 px-7"
            text="Skontaktuj się ze mną"
            bg="secondary"
            href="/contact"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
