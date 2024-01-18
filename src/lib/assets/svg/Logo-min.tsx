import { SVGProps } from "react";

export const LogoMin = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={13}
      height={13}
      className="w-full h-full object-contain"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <g filter="url(#a)">
        <rect width={13} height={13} fill="#8324FF" rx={65.686} />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={6.291}
          d="M62.851 35.148H40.873c-3.31 0-5.994 2.539-5.994 5.671v39.703h63.937V59.725"
        />
        <g filter="url(#b)">
          <path
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={6.291}
            d="M30.754 80.522h74.249v4.125c0 6.834-4.986 12.375-11.137 12.375H41.892c-6.152 0-11.138-5.54-11.138-12.375v-4.125Z"
            shapeRendering="crispEdges"
          />
        </g>
        <path
          fill="#fff"
          d="M83.974 40.108a3.504 3.504 0 0 1 4.954.01 3.506 3.506 0 0 1 .009 4.954 3.504 3.504 0 0 1-4.954-.009 3.503 3.503 0 0 1-.01-4.955Zm3.425 1.535a1.342 1.342 0 0 0-1.898-.007 1.342 1.342 0 0 0 .01 1.897 1.342 1.342 0 0 0 1.896.009 1.342 1.342 0 0 0-.008-1.9Zm-5.29 10.69.361.36a3.234 3.234 0 0 0 3.116.842l1.836 1.837a1.08 1.08 0 0 0 1.528 0l2.32-2.32a4.254 4.254 0 0 0 .634-5.208l1.188-1.188a10.458 10.458 0 0 0 2.58-10.536 4.208 4.208 0 0 0-2.748-2.749 10.458 10.458 0 0 0-10.536 2.58l-1.189 1.189a4.257 4.257 0 0 0-5.211.635l-2.316 2.318a1.08 1.08 0 0 0 0 1.53l1.836 1.837a3.24 3.24 0 0 0 .843 3.113l.36.361-1.67.998a1.08 1.08 0 0 0-.21 1.692l4.588 4.587a1.08 1.08 0 0 0 1.692-.21l.998-1.667Zm11.502-15.565a8.296 8.296 0 0 1-2.047 8.355l-6.039 6.04a1.08 1.08 0 0 1-1.527 0l-1.331-1.331-.009-.009-3.44-3.438-.008-.008-1.331-1.333a1.08 1.08 0 0 1 0-1.528l6.039-6.035a8.298 8.298 0 0 1 8.357-2.046 2.045 2.045 0 0 1 1.336 1.337v-.004ZM76.379 54.192a1.08 1.08 0 1 0-1.528-1.53L72 55.514a1.08 1.08 0 1 0 1.528 1.53l2.852-2.852Zm-2.295-3.822a1.08 1.08 0 0 1 0 1.527l-1.145 1.145a1.079 1.079 0 0 1-1.776-.343 1.081 1.081 0 0 1 .25-1.186l1.146-1.143a1.08 1.08 0 0 1 1.525 0Zm4.587 6.114a1.08 1.08 0 1 0-1.527-1.527l-1.145 1.145a1.08 1.08 0 1 0 1.53 1.528l1.142-1.146Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={12}
          height={12}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={4.393} dy={4.393} />
          <feGaussianBlur stdDeviation={22.516} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.77 0" />
          <feBlend in2="shape" result="effect1_innerShadow_370_17" />
        </filter>
        <filter
          id="b"
          width={13}
          height={13}
          x={25.546}
          y={77.377}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={2.062} />
          <feGaussianBlur stdDeviation={1.031} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_370_17"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_370_17"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
