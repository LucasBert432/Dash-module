import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const { buttonBg, textColor, buttonHover, borderColor } = useThemeStyles();

  return {
    button: css`
      background-color: ${buttonBg} !important;
      color: ${textColor} !important;
      margin-top: 10px;
      text-transform: none;
      font-weight: bold;

      &:hover {
        background-color: ${buttonHover} !important;
      }
    `,
    outlinedButton: css`
      border: 1px solid ${borderColor} !important;
      color: ${borderColor} !important;
      margin-top: 10px;
      text-transform: none;
      font-weight: bold;

      &:hover {
        background-color: ${buttonHover} !important;
      }
    `,
  };
};

export default useStyles;
