import { css } from "@mui/material";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = (size: number | undefined) => {
  const styles = useThemeStyles();
  const newSize = size || 200;

  return {
    container: css`
      width: ${newSize}px;
      height: ${newSize}px;
      background-color: ${styles.buttonBg};
      border-radius: 16px;
      border: 2px solid ${styles.invertBackgroundColor};
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  };
};

export default useStyles;
