import { css } from "@mui/material";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const styles = useThemeStyles();

  return {
    container: css`
      width: 100%;
      height: auto;
      background-color: ${styles.backgroundColor};
      color: ${styles.textColor};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      align-items: flex-end;
      @media (min-width: 768px) {
        padding: 20px;
      }
    `,
  };
};

export default useStyles;
