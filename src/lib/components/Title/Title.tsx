import type { ComponentProps } from "react";

type Props = ComponentProps<"h2"> & {
  children: string;
};

export const Title = ({ children }: Props) => {
  return (
    <h2 className="text-white leading-20 text-center laptop:text-left font-bold text-2xl tablet:text-4xl laptop:text-3xl desktop:text-4xl ">
      {children}
    </h2>
  );
};
