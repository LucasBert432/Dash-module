import { FunctionComponent } from "react";
import { IconSVGProps } from "./icon-types";

const Trash: FunctionComponent<IconSVGProps> = ({ color }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.3335 4.08333H11.6668M5.8335 6.41667V9.91667M8.16683 6.41667V9.91667M2.91683 4.08333L3.50016 11.0833C3.50016 11.3928 3.62308 11.6895 3.84187 11.9083C4.06066 12.1271 4.35741 12.25 4.66683 12.25H9.3335C9.64292 12.25 9.93966 12.1271 10.1585 11.9083C10.3772 11.6895 10.5002 11.3928 10.5002 11.0833L11.0835 4.08333M5.25016 4.08333V2.33333C5.25016 2.17862 5.31162 2.03025 5.42102 1.92085C5.53041 1.81146 5.67879 1.75 5.8335 1.75H8.16683C8.32154 1.75 8.46991 1.81146 8.57931 1.92085C8.6887 2.03025 8.75016 2.17862 8.75016 2.33333V4.08333"
        stroke={color}
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Trash;
