import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = (invertTheme?: boolean) => {
  const styles = useThemeStyles();

  return {
    container: css`
      width: 100%;
      height: auto;
      background-color: ${!invertTheme
        ? styles.backgroundColor
        : styles.invertBackgroundColor};
      color: ${!invertTheme ? styles.textColor : styles.invertTextColor};
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${styles.highlightColor};
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
      }
    `,
  };
};

export default useStyles;
