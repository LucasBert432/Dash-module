import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = (size: string, weight: string, invert?: boolean) => {
  const styles = useThemeStyles();

  return {
    text: css`
      color: ${invert ? styles.highlightColorInvert : styles.buttonBg};
      font-size: ${size};
      font-weight: ${weight};
      letter-spacing: 6px !important;
      text-align: center;
      word-break: break-word;
      transition: color 0.3s ease-in-out;
    `,
  };
};

export default useStyles;
