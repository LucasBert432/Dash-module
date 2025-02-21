import { ReactNode } from "react";

export type TitleProps = {
  children: ReactNode;
  level?: "h1" | "h2" | "h3";
  size?: string;
  weight?: "normal" | "bold" | "lighter";
};
