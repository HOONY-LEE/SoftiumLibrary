import type { ComponentPropsWithoutRef, ElementType } from "react";

export type PolymorphicProps<
  E extends ElementType,
  P = object,
> = P & {
  as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof P | "as">;
