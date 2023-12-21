import { forwardRef, useId } from "react";
import type { ComponentPropsWithRef, Ref } from "react";

type Props = ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ value, type, onChange, ...props }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className=" w-full mt-1">
        <input
          className={`shadow-sm appearance-none bg-main-bg w-full border-2 rounded-md border-primary/30 focus:border-primary py-3 px-4 text-sm font-normal text-white mt-2 leading-tight focus:outline-none focus:shadow-outline`}
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
