import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = (size?: string, weight?: string) => {
  const { textColor } = useThemeStyles();

  return {
    title: css`
      color: ${textColor};
      font-size: ${size || "24px"};
      font-weight: ${weight || "bold"};
      transition: color 0.3s ease-in-out;
    `,
  };
};

export default useStyles;
