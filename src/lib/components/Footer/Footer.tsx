import Link from "next/link";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="w-full  bg-main-bg px-5 laptop:px-24">
      <div className="bg-[#1C1E22] m-auto rounded-t-2xl flex flex-col tablet:grid-cols-2 gap-x-5 laptop:gap-x-0 justify-between tablet:grid laptop:grid-cols-4 px-10 laptop:px-16 desktop:px-36">
        <div className="flex flex-col gap-y-3 py-6">
          <h3 className="text-white text-3xl text-medium italic">
            {/* ArtLadyClinic */}
          </h3>
          <SocialMedia />
        </div>

        <div className="hidden col-span-3 laptop:flex py-3 px-10 w-full flex-col gap-y-2">
          <ul className="hidden text-white font-medium  space-x-10 align-middle pt-5 laptop:flex flex-row justify-between">
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
          </ul>
        </div>

        <div className="w-full border-t-[1px] py-3 border-primary tablet:col-span-2 laptop:col-span-4 flex flex-col gap-3 mt-2">
          <p className="text-white text-xs text-center">
            All rights reserved © Marharyta Lesniak
          </p>
          <p className="text-white text-xs text-center">{year}</p>
        </div>
      </div>
    </footer>
  );
};
