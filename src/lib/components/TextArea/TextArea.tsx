import { forwardRef, useId } from "react";
import type { ComponentPropsWithRef, Ref } from "react";

type Props = ComponentPropsWithRef<"textarea">;

export const TextArea = forwardRef(
  (
    // most of props we can skip (e.g. onChange) when we're using rest
    { value, onChange, ...rest }: Props,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const id = useId();
    return (
      <div>
        <textarea
          id={id}
          ref={ref}
          defaultValue={value}
          onChange={onChange}
          className="shadow-sm -mb-1 mt-2 bg-[#F4F4F4] border-b-2 border-b-dark-blue appearance-none text-sm font-light w-full py-2 px-3 text-dark-gray leading-tight focus:outline-none focus:shadow-outline"
          {...rest}
        />
      </div>
    );
  }
);

// for forwardRefs, memo, providers
TextArea.displayName = "ForwardRef (Input)";
