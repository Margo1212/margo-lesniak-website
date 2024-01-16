import type { ComponentPropsWithRef, Ref } from "react";
import { forwardRef, useId } from "react";

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
          className="shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] -mb-1 mt-2 bg-main-bg focus:border-2 rounded-3xl focus:border-primary/30 appearance-none text-sm font-normal w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          {...rest}
        />
      </div>
    );
  }
);

// for forwardRefs, memo, providers
TextArea.displayName = "ForwardRef (Input)";
