import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const { textColor, borderColor } = useThemeStyles();

  return {
    textField: css`
      width: 100%;

      & .MuiInputBase-root {
        color: ${textColor};
        font-size: 14px;
      }

      & .MuiInputLabel-root {
        color: ${textColor} !important;
        font-size: 14px;
      }

      & .MuiOutlinedInput-notchedOutline {
        border-color: ${borderColor} !important;
      }

      & .MuiInputLabel-root.Mui-focused {
        color: ${textColor} !important;
      }

      & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${borderColor} !important;
      }

      @media (min-width: 600px) {
        width: 80%;
        font-size: 16px;
      }

      @media (min-width: 1024px) {
        width: 60%;
        font-size: 18px;
      }
    `,
  };
};

export default useStyles;
