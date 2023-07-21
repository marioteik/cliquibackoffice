import * as React from "react";

import { cn } from "@/lib/utils";
import { OutsideClick } from "@/components/atoms/OutsideClick";

const CODE_LENGTH = new Array(6).fill(0);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CodeInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onChange, ...props }, ref) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = React.useState<boolean>(true);
    const [values, setValues] = React.useState<string>("");

    const handleClick = () => {
      innerRef.current?.focus();
      setIsFocused(true);
    };

    const handleOutsideClick = () => {
      setIsFocused(false);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(e.target.value);
      onChange?.(e);
    };

    React.useImperativeHandle(ref, () => innerRef.current!);

    return (
      <OutsideClick onClickOutside={handleOutsideClick}>
        <div onClick={handleClick} className="cursor-pointer relative">
          <input
            ref={innerRef}
            className="absolute top-0 left-0 h-10 bg-transparent w-full opacity-0"
            onChange={handleOnChange}
            maxLength={CODE_LENGTH.length}
            autoFocus={true}
            autoComplete="off"
            {...props}
          />

          <div
            className={cn("flex gap-2 h-10 w-full bg-transparent", className)}
          >
            {CODE_LENGTH.map((v, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "flex h-10 w-full justify-center items-center rounded-md border border-input bg-transparent px-3 py-2 text-xl ring-offset-background123",
                    className,
                    {
                      "outline-none ring-2 ring-ring ring-offset-2":
                        (index === values.length ||
                          (index === values.length - 1 &&
                            index === CODE_LENGTH.length - 1)) &&
                        isFocused,
                    }
                  )}
                >
                  {values.split("")[index]}
                </div>
              );
            })}
          </div>
        </div>
      </OutsideClick>
    );
  }
);

CodeInput.displayName = "CodeInput";

export { CodeInput };
