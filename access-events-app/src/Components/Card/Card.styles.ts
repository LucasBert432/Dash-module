import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const styles = useThemeStyles();

  return {
    card: css`
      width: 100%;
      height: 360px;
      max-width: 300px;
      background: ${styles.backgroundColor};
      border-radius: 20px;
      padding: 15px;
      text-align: center;
      box-shadow: 0 4px 8px ${styles.invertBackgroundColor};
      display: flex;
      cursor: pointer;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      transition: all 0.5s ease-in-out;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        background: ${styles.defaultDarkGreen};
      }

      @media (min-width: 768px) {
        max-width: 420px;
        padding: 20px;
      }

      @media (min-width: 1024px) {
        max-width: 320px;
        padding: 25px;
      }
    `,

    image: css`
      width: 100%;
      height: 50%;
      border-radius: 8px;

      @media (min-width: 768px) {
        border-radius: 10px;
      }

      @media (min-width: 1024px) {
        border-radius: 12px;
      }
    `,

    title: css`
      font-size: 18px;
      font-weight: bold;
      margin-top: 18px;
      color: ${styles.textColor};

      @media (min-width: 768px) {
        font-size: 18px;
      }

      @media (min-width: 1024px) {
        font-size: 16px;
      }
    `,

    date: css`
      font-size: 16px;
      color: ${styles.textColor};
      margin: 5px 0;

      @media (min-width: 768px) {
        font-size: 14px;
      }

      @media (min-width: 1024px) {
        font-size: 12px;
      }
    `,

    location: css`
      font-size: 16px;
      color: ${styles.textColor};
      margin: 5px 0;

      @media (min-width: 768px) {
        font-size: 14px;
      }

      @media (min-width: 1024px) {
        font-size: 12px;
      }
    `,
  };
};

export default useStyles;
