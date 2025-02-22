import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = (size?: string, weight?: string, invertTheme?: boolean) => {
  const styles = useThemeStyles();

  return {
    title: css`
      color: ${invertTheme ? styles.invertTextColor : styles.textColor};
      font-size: ${size || "24px"};
      font-weight: ${weight || "bold"};
      line-height: 126.4%;
      letter-spacing: 0%;
      text-align: center;
      transition: color 0.3s ease-in-out;
    `,
  };
};

export default useStyles;
