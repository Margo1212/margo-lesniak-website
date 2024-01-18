import type { ComponentPropsWithRef, Ref } from "react";
import { forwardRef, useId } from "react";

type Props = ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ value, type, onChange, ...props }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className=" w-full mt-1">
        <input
          className={`bg-main-bg appearance-none shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] w-full rounded-3xl focus:border-2 focus:border-primary/20 py-4 px-6 text-sm font-normal text-white mt-2 leading-tight focus:outline-none focus:shadow-outline`}
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
