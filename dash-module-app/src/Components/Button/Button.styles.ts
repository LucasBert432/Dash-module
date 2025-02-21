import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const styles = useThemeStyles();

  return {
    button: css`
      background-color: ${styles.backgroundColor};
      color: ${styles.buttonBg};
      font-size: 16px;
      font-weight: bold;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: ${styles.buttonHover};
      }
    `,
  };
};

export default useStyles;
