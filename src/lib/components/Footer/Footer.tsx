import Link from "next/link";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="w-full  bg-main-bg px-5 laptop:px-24">
      <div className="bg-main-bg shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] m-auto rounded-t-3xl flex flex-col tablet:grid-cols-2 gap-x-5 laptop:gap-x-0 justify-between tablet:grid laptop:grid-cols-4 px-10 laptop:px-16 desktop:px-36">
        <div className="flex flex-col gap-y-3 py-6">
          <h3 className="text-white text-3xl text-medium italic">
            {/* ArtLadyClinic */}
          </h3>
          <SocialMedia />
        </div>

        <ul className="col-span-3 px-8 text-white font-medium hidden my-5 rounded-full w-full shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35]    space-x-5 align-middle laptop:flex flex-row items-center justify-between">
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
