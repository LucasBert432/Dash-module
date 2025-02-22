import { css } from "@emotion/react";
import useThemeStyles from "../../../../../../hook/useThemeStyles";

const useStyles = () => {
  const styles = useThemeStyles();

  return {
    container: css`
      display: flex;
      flex-direction: column; /* Definido como mobile first */
      align-items: center;
      height: auto;
      width: 100%;
      padding: 20px;
      background-color: ${styles.defaultDark};
      border: 1px solid ${styles.defaultDarkGreen};
      border-radius: 120px;

      @media (min-width: 768px) {
        flex-direction: row;
        width: 1020px;
        padding: 20px;
        align-items: center;
      }
    `,

    containerText: css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex: 1;
      align-items: center;

      @media (min-width: 768px) {
        align-items: flex-start;
        width: 517px;
        margin-bottom: 24px;
      }
    `,
    leftSide: css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex: 1;
      align-items: center; /* Alinhado ao centro no mobile first */

      @media (min-width: 768px) {
        align-items: flex-start; /* No desktop, alinhado à esquerda */
      }
    `,

    button: css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex: 1;
      margin-top: 26px;
      align-items: center; /* Centralizado no mobile first */

      @media (min-width: 768px) {
        align-items: flex-start; /* No desktop, alinhado à esquerda */
        margin-left: 24px;
      }
    `,

    rightSide: css`
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-image: url("https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b");
      background-size: cover;
      background-position: center;

      @media (min-width: 768px) {
        width: 347px;
        height: 347px;
        margin-top: 20px;
      }
    `,
  };
};

export default useStyles;
