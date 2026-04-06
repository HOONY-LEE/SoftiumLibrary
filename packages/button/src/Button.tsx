import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@softium/core";
import type { ButtonProps } from "./Button.types";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none",
  {
    variants: {
      variant: {
        filled: "border border-transparent",
        outlined: "border bg-transparent",
        ghost: "border-transparent bg-transparent",
      },
      size: {
        sm: "h-8 px-3 text-sm gap-1",
        md: "h-10 px-4 text-base gap-2",
        lg: "h-12 px-6 text-lg gap-2",
      },
      color: {
        primary: "",
        neutral: "",
        error: "",
        success: "",
      },
    },
    compoundVariants: [
      { variant: "filled", color: "primary", className: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700" },
      { variant: "filled", color: "neutral", className: "bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900" },
      { variant: "filled", color: "error",   className: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800" },
      { variant: "filled", color: "success", className: "bg-green-700 text-white hover:bg-green-800 active:bg-green-900" },

      { variant: "outlined", color: "primary", className: "border-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100" },
      { variant: "outlined", color: "neutral", className: "border-gray-700 text-gray-700 hover:bg-gray-50 active:bg-gray-100" },
      { variant: "outlined", color: "error",   className: "border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100" },
      { variant: "outlined", color: "success", className: "border-green-700 text-green-700 hover:bg-green-50 active:bg-green-100" },

      { variant: "ghost", color: "primary", className: "text-blue-500 hover:bg-blue-50 active:bg-blue-100" },
      { variant: "ghost", color: "neutral", className: "text-gray-700 hover:bg-gray-100 active:bg-gray-200" },
      { variant: "ghost", color: "error",   className: "text-red-600 hover:bg-red-50 active:bg-red-100" },
      { variant: "ghost", color: "success", className: "text-green-700 hover:bg-green-50 active:bg-green-100" },
    ],
    defaultVariants: {
      variant: "filled",
      size: "md",
      color: "primary",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "filled",
      size = "md",
      color = "primary",
      loading = false,
      fullWidth = false,
      startIcon,
      endIcon,
      disabled,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, color }),
          fullWidth && "w-full",
          className,
        )}
        disabled={disabled || loading}
        {...rest}
      >
        {loading ? (
          <span className="animate-spin inline-block">⟳</span>
        ) : (
          startIcon
        )}
        {children}
        {!loading && endIcon}
      </button>
    );
  },
);

Button.displayName = "Button";
