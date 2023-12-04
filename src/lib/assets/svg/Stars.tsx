import { ComponentPropsWithRef } from "react";

export type ImageProps = ComponentPropsWithRef<"svg"> & {
  position: "up" | "down";
};

export const Stars = (props: ImageProps) => {
  const { position } = props;
  const imagePosition =
    position === "up"
      ? "hidden desktop:block scale-x-[-1] absolute top-10 right-20"
      : "hidden  desktop:block absolute bottom-10 left-10";
  return (
    <svg
      className={imagePosition}
      width="147"
      height="112"
      viewBox="0 0 147 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65.5433 67.4856L52.2717 81.2624L55.4047 100.716L39 91.531L22.5953 100.716L25.7283 81.2624L12.4567 67.4856L30.7977 64.6474L39 46.9483L47.2023 64.6474L65.5433 67.4856Z"
        fill="#4F00B5"
        fillOpacity="0.21"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.0517 59.0052L39 33L26.9483 59.0052L0 63.1753L19.5 83.4175L14.8967 112L39 98.5052L63.1033 112L58.5 83.4175L78 63.1753L51.0517 59.0052ZM47.8379 63.7158L67.6 66.7739L53.3 81.6182L56.6758 102.579L39 92.6825L21.3242 102.579L24.7 81.6182L10.4 66.7739L30.1621 63.7158L39 44.6454L47.8379 63.7158Z"
        fill="#4F00B5"
        fillOpacity="0.21"
      />
      <path
        d="M121.214 70.4582L127.503 74.8886L127.929 75.1883L128.414 74.9842L135.489 72.009L133.417 79.7682L133.281 80.2766L133.597 80.6777L138.46 86.8498L130.898 87.1657L130.369 87.1878L130.087 87.66L126.047 94.4108L123.411 86.8819L123.24 86.3927L122.755 86.2626L115.35 84.2759L121.329 79.2993L121.74 78.958L121.706 78.4196L121.214 70.4582Z"
        stroke="#4F00B5"
        strokeOpacity="0.24"
        strokeWidth="2"
      />
      <path
        d="M91 0L93.645 5.65717L99.5595 6.56434L95.2798 10.9678L96.2901 17.1857L91 14.25L85.7099 17.1857L86.7202 10.9678L82.4405 6.56434L88.355 5.65717L91 0Z"
        fill="#4F00B5"
        fillOpacity="0.23"
      />
    </svg>
  );
};
