import { forwardRef } from "react";
import { useTheme, classNames } from "@softium/core";
import type { ButtonProps } from "./Button.types";

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
      style,
      className,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme();

    const colorMap = {
      primary: theme.colors.primary[500],
      neutral: theme.colors.neutral[700],
      error: theme.colors.error,
      success: theme.colors.success,
    };

    const sizeMap = {
      sm: {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        fontSize: theme.typography.fontSize.sm,
        height: "32px",
        gap: "4px",
      },
      md: {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.md,
        height: "40px",
        gap: "8px",
      },
      lg: {
        padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
        fontSize: theme.typography.fontSize.lg,
        height: "48px",
        gap: "8px",
      },
    };

    const baseColor = colorMap[color];
    const sizeTokens = sizeMap[size];

    const variantStyles: Record<string, React.CSSProperties> = {
      filled: {
        backgroundColor: baseColor,
        color: "#ffffff",
        border: "none",
      },
      outlined: {
        backgroundColor: "transparent",
        color: baseColor,
        border: `1px solid ${baseColor}`,
      },
      ghost: {
        backgroundColor: "transparent",
        color: baseColor,
        border: "none",
      },
    };

    const composedStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sizeTokens.gap,
      padding: sizeTokens.padding,
      fontSize: sizeTokens.fontSize,
      height: sizeTokens.height,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight.medium,
      lineHeight: theme.typography.lineHeight.normal,
      borderRadius: theme.radii.md,
      cursor: disabled || loading ? "not-allowed" : "pointer",
      opacity: disabled || loading ? 0.6 : 1,
      transition: `all ${theme.transitions.fast}`,
      width: fullWidth ? "100%" : "auto",
      ...variantStyles[variant],
      ...style,
    };

    return (
      <button
        ref={ref}
        className={classNames("softium-button", className)}
        disabled={disabled || loading}
        style={composedStyle}
        {...rest}
      >
        {loading ? (
          <span style={{ display: "inline-flex", animation: "spin 1s linear infinite" }}>⟳</span>
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
