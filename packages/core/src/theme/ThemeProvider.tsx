import { createContext, useContext, useMemo, type ReactNode } from "react";
import { defaultTokens, type ThemeTokens } from "./tokens";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface ThemeProviderProps {
  theme?: DeepPartial<ThemeTokens>;
  children: ReactNode;
}

const ThemeContext = createContext<ThemeTokens>(defaultTokens);

function deepMerge<T extends Record<string, unknown>>(
  target: T,
  source: DeepPartial<T>,
): T {
  const result = { ...target };
  for (const key in source) {
    const sourceVal = source[key];
    const targetVal = target[key];
    if (
      sourceVal &&
      typeof sourceVal === "object" &&
      !Array.isArray(sourceVal) &&
      targetVal &&
      typeof targetVal === "object"
    ) {
      (result as Record<string, unknown>)[key] = deepMerge(
        targetVal as Record<string, unknown>,
        sourceVal as DeepPartial<Record<string, unknown>>,
      );
    } else if (sourceVal !== undefined) {
      (result as Record<string, unknown>)[key] = sourceVal;
    }
  }
  return result;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const merged = useMemo(
    () => (theme ? deepMerge(defaultTokens, theme) : defaultTokens),
    [theme],
  );

  return (
    <ThemeContext.Provider value={merged}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeTokens {
  return useContext(ThemeContext);
}
