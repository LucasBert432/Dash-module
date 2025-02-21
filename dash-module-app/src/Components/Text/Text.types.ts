import { ReactNode } from "react";

export type TextProps = {
  children: ReactNode;
  size?: string;
  weight?: "normal" | "bold" | "lighter";
};
