import { forwardRef, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@softium/core";
import type { InputProps } from "./Input.types";

const inputWrapperVariants = cva(
  "flex items-center gap-2 rounded-lg transition-all duration-150 w-full",
  {
    variants: {
      variant: {
        outlined: "border border-gray-300 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20",
        filled: "border border-transparent bg-gray-100 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20",
      },
      inputSize: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-4 text-lg",
      },
      error: {
        true: "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/20",
        false: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed bg-gray-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "outlined",
      inputSize: "md",
      error: false,
      disabled: false,
    },
  },
);

export type InputWrapperVariantProps = VariantProps<typeof inputWrapperVariants>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      inputSize = "md",
      variant = "outlined",
      startAdornment,
      endAdornment,
      fullWidth = false,
      disabled,
      className,
      id: externalId,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const id = externalId || autoId;

    return (
      <div className={cn("inline-flex flex-col gap-1", fullWidth ? "w-full" : "w-auto")}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-gray-800"
          >
            {label}
          </label>
        )}
        <div
          className={inputWrapperVariants({
            variant,
            inputSize,
            error: error || false,
            disabled: disabled || false,
          })}
        >
          {startAdornment && (
            <span className="text-gray-400 flex items-center">{startAdornment}</span>
          )}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            className={cn(
              "flex-1 bg-transparent outline-none text-gray-900 placeholder:text-gray-400 disabled:cursor-not-allowed w-full",
              className,
            )}
            {...rest}
          />
          {endAdornment && (
            <span className="text-gray-400 flex items-center">{endAdornment}</span>
          )}
        </div>
        {(error && errorMessage) || helperText ? (
          <span className={cn("text-xs", error ? "text-red-500" : "text-gray-500")}>
            {error ? errorMessage : helperText}
          </span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
