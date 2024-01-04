import { ComponentPropsWithRef } from "react";

export type ImageProps = ComponentPropsWithRef<"svg"> & {
  position: "up" | "down";
};

export const ContactImage = (props: ImageProps) => {
  const { position } = props;
  const imagePosition =
    position === "up"
      ? "hidden desktop:block scale-x-[-1] absolute bottom-0 -right-10"
      : "hidden  desktop:block absolute bottom-10 left-10";
  return (
    <svg
      className={imagePosition}
      width="400"
      height="351"
      viewBox="0 0 400 351"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M242.179 0C348.679 0 400 115.751 400 222.11C400 301.607 321.78 350.936 242.179 350.936C135.023 350.936 0 329.126 0 222.11C0 93.8723 113.772 0 242.179 0Z"
        fill="#9747FF"
      />
    </svg>
  );
};
