import Link from "next/link";
import { ReactNode } from "react";

export type ButtonProps = {
  text: string;
  icon?: ReactNode;
  bg: "primary" | "secondary";
  href: string;
  styles?: string;
  target?: string;
};

export const Button = ({
  href,
  text,
  icon,
  bg,
  styles,
  target,
}: ButtonProps) => {
  const background =
    bg === "primary"
      ? "bg-gradient-to-b from-[#8C33FF] to-[#37007E] "
      : "bg-gradient-to-b from-[#05A66B] to-[#008253] hover:from-pink-500 hover:to-yellow-500";

  return (
    <Link
      href={href}
      target={target}
      className={`${background} text-white text-center tracking-wide transition ease-in-out duration-300 hover:scale-105 shadow-md rounded-full font-semibold ${styles} hover:scale-105`}
    >
      {text}
      {icon}
    </Link>
  );
};
