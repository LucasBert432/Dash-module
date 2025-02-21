import { css } from "@emotion/react";

const useStyles = (isWhite: boolean) => ({
  container: css`
    width: 200px;
    height: 200px;
    background-color: ${isWhite ? "#333" : "rgba(57, 233, 145, 1)"};
    border-radius: 16px;
    border: 2px solid ${isWhite ? "#42f4a1" : "#ffffff"};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
});

export default useStyles;
