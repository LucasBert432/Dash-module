import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const { defaultDark, defaultDarkGreen } = useThemeStyles();

  return {
    textField: css`
      width: 100%;

      & .MuiInputBase-root {
        color: ${defaultDark};
        font-size: 14px;
      }

      & .MuiInputLabel-root {
        color: ${defaultDark} !important;
        font-size: 14px;
      }

      & .MuiOutlinedInput-notchedOutline {
        border-color: ${defaultDarkGreen} !important;
      }

      & .MuiInputLabel-root.Mui-focused {
        color: ${defaultDark} !important;
      }

      & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${defaultDarkGreen} !important;
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
