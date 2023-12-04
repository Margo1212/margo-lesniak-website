import Link from "next/link";
import { Category } from "types/types";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export type FooterProps = {
  categories: Category[];
  contact: any;
};

export const Footer = ({ categories, contact }: FooterProps) => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="w-full flex flex-col tablet:grid-cols-2 gap-x-5 laptop:gap-x-0 justify-between tablet:grid laptop:grid-cols-4 px-10 pt-10 laptop:px-16 desktop:px-36 bg-gradient-to-b from-dark-blue to-light-blue">
      <div className="flex flex-col gap-y-3 py-6">
        <h3 className="text-white text-3xl text-medium italic">
          ArtLadyClinic
        </h3>
        <SocialMedia />
      </div>

      <div className="hidden laptop:flex py-6 px-10 w-full flex-col gap-y-2">
        <p className="text-base font-medium text-white">Nawigacja</p>
        <ul className="flex flex-col text-xs gap-2 text-white">
          <li>
            <Link href="/about">O nas</Link>
          </li>
          <li>
            <Link href="/about-services">O usługach</Link>
          </li>
          <li>
            <Link href="/gallery">Galeria</Link>
          </li>
          <li>
            <Link href="/price-list">Cennik</Link>
          </li>
          <li>
            <Link href="/products">Produkty</Link>
          </li>
          <li>
            <Link href="/news">Nowośći</Link>
          </li>
          <li>
            <Link href="/vouchers">
              <p className="text-wrapper">Bony podarunkowe</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </div>

      <div className="w-full border-t-[1px] py-5 border-white tablet:col-span-2 laptop:col-span-4 flex flex-col gap-3 mt-4">
        <p className="text-white text-xs text-center">
          All rights reserved © Marharyta Lesniak
        </p>
        <p className="text-white text-xs text-center">{year}</p>
      </div>
    </footer>
  );
};
