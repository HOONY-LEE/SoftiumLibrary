import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "filled" | "outlined" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = "primary" | "neutral" | "error" | "success";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
