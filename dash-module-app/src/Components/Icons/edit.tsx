import { FunctionComponent } from "react";
import { IconSVGProps } from "./icon-types";

const Edit: FunctionComponent<IconSVGProps> = ({ color }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.0835 4.08334H3.50016C3.19074 4.08334 2.894 4.20626 2.6752 4.42505C2.45641 4.64384 2.3335 4.94059 2.3335 5.25001V10.5C2.3335 10.8094 2.45641 11.1062 2.6752 11.325C2.894 11.5438 3.19074 11.6667 3.50016 11.6667H8.75016C9.05958 11.6667 9.35633 11.5438 9.57512 11.325C9.79391 11.1062 9.91683 10.8094 9.91683 10.5V9.91668M9.3335 2.91668L11.0835 4.66668M11.8914 3.84125C12.1212 3.61151 12.2502 3.29991 12.2502 2.975C12.2502 2.65009 12.1212 2.3385 11.8914 2.10875C11.6617 1.87901 11.3501 1.74994 11.0252 1.74994C10.7003 1.74994 10.3887 1.87901 10.1589 2.10875L5.25016 7V8.75H7.00016L11.8914 3.84125Z"
        stroke={color}
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Edit;
