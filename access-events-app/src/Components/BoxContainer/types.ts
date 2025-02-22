import { ReactNode } from "react";

export interface BoxContainerProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  invertTheme?: boolean;
}
