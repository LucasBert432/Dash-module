import { FunctionComponent } from "react";
import { IconSVGProps } from "./icon-types";

const GrayCircleOutline: FunctionComponent<IconSVGProps> = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="23"
        stroke="#A9A9A9"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
};

export default GrayCircleOutline;
