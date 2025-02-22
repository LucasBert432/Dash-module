import { css } from "@mui/material";
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
      justify-content: center;
      border-radius: 20px;
      flex-direction: column;
      align-items: center;
      position: static;
      padding: 15px;

      @media (min-width: 768px) {
        padding: 20px;
        align-items: flex-start;
      }

      @media (min-width: 1024px) {
        padding: 30px;
      }
    `,
    title: css`
      position: static;
      top: 18px;
      left: 34px;
      font-size: 20px;
      font-weight: bold;
      color: ${styles.textColor};

      @media (min-width: 768px) {
        font-size: 24px;
      }

      @media (min-width: 1024px) {
        font-size: 28px;
      }
    `,
    subtitle: css`
      position: static;
      top: 72px;
      left: 34px;
      font-size: 14px;
      color: ${styles.textColor};

      @media (min-width: 768px) {
        font-size: 16px;
      }

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    `,
    childrenContainer: css`
      @media (min-width: 768px) {
        margin-top: 70px;
        width: 100%;
        align-items: flex-start;
        flex-direction: row;
      }

      @media (min-width: 1024px) {
        margin-top: 80px;
        width: 100%;
        align-items: flex-start;
        flex-direction: row;
      }
    `,
  };
};

export default useStyles;
