import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const styles = useThemeStyles();

  return {
    container: css`
      width: 200px;
      height: 200px;
      background-color: ${styles.buttonHover};
      border-radius: 16px;
      border: 2px solid ${styles.invert};
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  };
};

export default useStyles;
