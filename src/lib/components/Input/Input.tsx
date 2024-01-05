import { forwardRef, useId } from "react";
import type { ComponentPropsWithRef, Ref } from "react";

type Props = ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ value, type, onChange, ...props }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className=" w-full mt-1">
        <input
          className={`bg-main-bg appearance-none shadow-[12px_12px_24px_#191c21,-5px_-5px_11px_#21262d] w-full rounded-md focus:border-2 focus:border-primary/20 py-3 px-4 text-sm font-normal text-white mt-2 leading-tight focus:outline-none focus:shadow-outline`}
          id={id}
          type={type}
          ref={ref}
          defaultValue={value}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "ForwardRef (Input)";
