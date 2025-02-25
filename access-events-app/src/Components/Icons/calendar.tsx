import { FunctionComponent } from "react";
import { IconSVGProps } from "./icon-types";

const Calendar: FunctionComponent<IconSVGProps> = ({
  color = "black",
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M490.6,43H381.1V11h-20.9v32H151.7V11h-20.9v32H21.4C15.2,43,11,47.2,11,53.6v436.7c0,6.4,4.2,10.7,10.4,10.7h469.1c6.3,0,10.4-4.3,10.4-10.7V53.6C501,47.2,496.8,43,490.6,43z M480.1,479.7H31.9V64.3h99v32h20.9v-32h208.5v32h20.9v-32h99V479.7z"></path>
          <path d="m84,170.8c-6.3,0-10.4,4.3-10.4,10.7v245c0,6.4 4.2,10.7 10.4,10.7h344c6.3,0 10.4-4.3 10.4-10.7v-245c0-6.4-4.2-10.7-10.4-10.7h-344zm333.6,245h-323.2v-223.7h323.2v223.7z"></path>
          <rect width="20.9" x="214.3" y="232.6" height="21.3"></rect>
          <rect width="20.9" x="276.9" y="232.6" height="21.3"></rect>
          <rect width="20.9" x="339.4" y="232.6" height="21.3"></rect>
          <rect width="20.9" x="151.7" y="293.3" height="21.3"></rect>
          <rect width="20.9" x="214.3" y="293.3" height="21.3"></rect>
          <rect width="20.9" x="276.9" y="293.3" height="21.3"></rect>
          <rect width="20.9" x="339.4" y="293.3" height="21.3"></rect>
          <rect width="20.9" x="151.7" y="355.1" height="21.3"></rect>
          <rect width="20.9" x="214.3" y="355.1" height="21.3"></rect>
          <rect width="20.9" x="276.9" y="355.1" height="21.3"></rect>
          <rect width="20.9" x="339.4" y="355.1" height="21.3"></rect>
        </g>
      </g>
    </svg>
  );
};

export default Calendar;
