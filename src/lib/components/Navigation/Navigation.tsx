import { Logo } from "@lib/assets/svg/Logo";
import { LogoMin } from "@lib/assets/svg/Logo-min";
import Link from "next/link";
import { Button } from "../Button/Button";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export const revalidate = 10;

const Navigation = () => {
  return (
    <nav className="w-full h-auto mt-5 rounded-3xl m-auto flex justify-between items-center bg-main-bg shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] laptop:text-xs desktop:text-sm font-medium px-6 py-3 laptop:py-3 ">
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

      <ul className="hidden text-white font-normal  space-x-8 align-middle py-5 laptop:flex flex-row justify-between tracking-wide">
        <li>
          <Link aria-label="Link to home" href="/">
            Strona Główna
          </Link>
        </li>
        {/* <li>
          <Link aria-label="Link to about page" href="/about">
            O mnie
          </Link>
        </li>
        <li>
          <Link aria-label="Link to gallery" href="/services">
            Usługi
          </Link>
        </li> */}
        <li>
          <Link aria-label="Link to news page" href="/blog">
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
