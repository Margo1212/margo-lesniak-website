import type { ComponentProps } from "react";

type Props = ComponentProps<"h2"> & {
  children: (string | JSX.Element)[] | string | JSX.Element;
};

export const PagesTitle = ({ children }: Props) => {
  return (
    <h2 className="text-white  text-center tablet:text-left font-bold text-3xl tablet:text-4xl laptop:text-3xl desktop:text-5xl ">
      {children}
    </h2>
  );
};
