import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = (size: string, weight: string) => {
  const { textColor } = useThemeStyles();

  return {
    text: css`
      color: ${textColor};
      font-size: ${size};
      font-weight: ${weight};
      font-family: "Montserrat";
      letter-spacing: 6px !important;
      text-align: center;
      transition: color 0.3s ease-in-out;
    `,
  };
};

export default useStyles;
