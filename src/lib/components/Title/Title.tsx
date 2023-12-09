import type { ComponentProps } from "react";

type Props = ComponentProps<"h2"> & {
  children: string;
};

export const Title = ({ children }: Props) => {
  return (
    <h2 className="text-white leading-20 text-center laptop:text-left font-bold text-3xl tablet:text-5xl desktop:text-5xl ">
      {children}
    </h2>
  );
};
