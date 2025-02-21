import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const styles = useThemeStyles();

  return {
    card: css`
      background-color: ${styles.backgroundColor};
      color: ${styles.textColor};
      border-radius: 10px;
      padding: 16px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: all 0.3s ease-in-out;
      max-width: 300px;
    `,

    image: css`
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
    `,

    title: css`
      font-size: 20px;
      margin: 10px 0;
    `,

    description: css`
      font-size: 14px;
      color: ${styles.invert};
    `,
  };
};

export default useStyles;
