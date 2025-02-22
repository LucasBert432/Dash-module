import { css } from "@emotion/react";

const useStyles = () => {
  return {
    container: css`
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    `,
    title: css`
      font-size: 2rem;
      color: #333;
      margin-bottom: 20px;
    `,
    description: css`
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
      margin-bottom: 20px;
    `,
  };
};

export default useStyles;
