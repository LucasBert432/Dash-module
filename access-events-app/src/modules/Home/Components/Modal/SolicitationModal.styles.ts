import { css } from "@emotion/react";

const useStyles = () => {
  return {
    container: css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      margin-bottom: 24px;
    `,

    formContainer: css`
      margin-top: 12px;
    `,
    containerFooter: css`
      margin-top: 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      @media (min-width: 1024px) {
        flex-direction: row;
        width: 100%;
        padding: 18px;
        align-items: center;
        display: flex;
        gap: 12px;
        justify-content: flex-end;
      }
    `,
  };
};

export default useStyles;
