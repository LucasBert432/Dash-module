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
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      width: 100%;
      max-width: 100%;

      @media (min-width: 480px) {
        justify-content: center;
      }

      @media (min-width: 768px) {
        justify-content: space-between;
      }

      @media (min-width: 1024px) {
        justify-content: space-between;
        max-width: 100%;
      }

      @media (min-width: 1280px) {
        justify-content: space-between;
        max-width: 100%;
      }

      .card {
        flex: 1 1 calc(20% - 16px);
        max-width: calc(20% - 16px);
      }
    `,
  };
};

export default useStyles;
