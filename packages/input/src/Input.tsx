import { forwardRef, useId } from "react";
import { useTheme, classNames } from "@softium/core";
import type { InputProps } from "./Input.types";

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
      style,
      id: externalId,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme();
    const autoId = useId();
    const id = externalId || autoId;

    const sizeMap = {
      sm: {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        fontSize: theme.typography.fontSize.sm,
        height: "32px",
      },
      md: {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.md,
        height: "40px",
      },
      lg: {
        padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
        fontSize: theme.typography.fontSize.lg,
        height: "48px",
      },
    };

    const sizeTokens = sizeMap[inputSize];
    const borderColor = error
      ? theme.colors.error
      : theme.colors.neutral[300];

    const wrapperStyle: React.CSSProperties = {
      display: "inline-flex",
      flexDirection: "column",
      gap: theme.spacing.xs,
      width: fullWidth ? "100%" : "auto",
      fontFamily: theme.typography.fontFamily,
    };

    const inputWrapperStyle: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing.xs,
      height: sizeTokens.height,
      padding: sizeTokens.padding,
      fontSize: sizeTokens.fontSize,
      borderRadius: theme.radii.md,
      transition: `all ${theme.transitions.fast}`,
      ...(variant === "outlined"
        ? {
            border: `1px solid ${borderColor}`,
            backgroundColor: "transparent",
          }
        : {
            border: "1px solid transparent",
            backgroundColor: theme.colors.neutral[100],
          }),
    };

    const inputStyle: React.CSSProperties = {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "inherit",
      fontFamily: "inherit",
      color: theme.colors.text.primary,
      width: "100%",
      ...style,
    };

    const labelStyle: React.CSSProperties = {
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.medium,
      color: theme.colors.text.primary,
    };

    const helperStyle: React.CSSProperties = {
      fontSize: theme.typography.fontSize.xs,
      color: error ? theme.colors.error : theme.colors.text.secondary,
    };

    return (
      <div
        className={classNames("softium-input-wrapper", className)}
        style={wrapperStyle}
      >
        {label && (
          <label htmlFor={id} style={labelStyle}>
            {label}
          </label>
        )}
        <div style={inputWrapperStyle}>
          {startAdornment}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            style={inputStyle}
            {...rest}
          />
          {endAdornment}
        </div>
        {(error && errorMessage) || helperText ? (
          <span style={helperStyle}>
            {error ? errorMessage : helperText}
          </span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
