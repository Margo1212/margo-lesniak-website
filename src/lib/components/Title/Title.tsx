import type { ComponentProps } from "react";

type Props = ComponentProps<"h2"> & {
  children: (string | JSX.Element)[] | string | JSX.Element;
};

export const Title = ({ children }: Props) => {
  return (
    <h2 className="text-white leading-5  text-center laptop:text-left font-bold text-2xl tablet:text-4xl laptop:text-3xl desktop:text-5xl ">
      {children}
    </h2>
  );
};
