import { ReactNode } from "react";

export type FlexProps = {
  children: ReactNode;
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  gap?: number;
  wrap?: boolean;
  marginBottom?: number;
  marginTop?: number;
};

export type FlexStylesProps = {
  direction: "row" | "column";
  justify: string;
  align: string;
  gap: number;
  wrap: boolean;
  marginBottom: number;
  marginTop: number;
};
