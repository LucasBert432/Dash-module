import { css } from "@emotion/react";

const useStyles = () => {
  return {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      padding: 0 16px;
    `,

    cardGrid: css`
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      width: 100%;
      max-width: 100%;
      justify-content: center;

      @media (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `,
  };
};

export default useStyles;
