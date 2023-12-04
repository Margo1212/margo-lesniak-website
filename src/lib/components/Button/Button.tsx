import Link from "next/link";
import { ReactNode } from "react";

export const revalidate = 10;

export type ButtonProps = {
  text: string;
  icon?: ReactNode;
  bg: "primary" | "secondary";
  href: string;
  styles?: string;
};

export const Button = ({ href, text, icon, bg, styles }: ButtonProps) => {
  const background =
    bg === "primary"
      ? "bg-gradient-to-b from-[#EE0CF2] to-[#AB05F2] hover:from-pink-500 hover:to-yellow-500 "
      : "bg-gradient-to-b from-[#36FFB5] to-[#05A66B] hover:from-pink-500 hover:to-yellow-500";

  return (
    <Link
      href={href}
      className={`${background} text-white text-center transition ease-in-out duration-300 shadow-md rounded-full  ${styles}`}
    >
      {text}
      {icon}
    </Link>
  );
};
