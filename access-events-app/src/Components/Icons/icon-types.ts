import iconMap from "./icon-map";
import { SVGAttributes } from "react";

export type IconTypes = keyof typeof iconMap.icons;

export interface IconSVGProps {
  color?: string;
  width?: string;
  height?: string;
  size?: string;
  className?: string;
}

export interface PropsIcon extends Omit<SVGAttributes<HTMLElement>, "color"> {
  name?: IconTypes;
  size?: string;
  width?: string;
  height?: string;
  color?: string;
  ariaLabel?: string;
}
