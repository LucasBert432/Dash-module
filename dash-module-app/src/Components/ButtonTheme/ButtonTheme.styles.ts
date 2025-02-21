import { css } from "@emotion/react";

const useStyles = (isWhite: boolean) => ({
  button: css`
    background-color: ${isWhite
      ? "rgba(51, 51, 51, 1)"
      : "rgba(57, 233, 145, 1)"};
    color: ${isWhite ? "rgba(57, 233, 145, 1)" : "#333"};
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${isWhite ? "rgb(19, 18, 18)" : "rgb(6, 143, 75)"};
    }
  `,
});

export default useStyles;
