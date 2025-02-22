import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const { buttonBg, buttonHover, secondaryHighlight } = useThemeStyles();

  return {
    button: css`
      background-color: ${buttonBg};
      color: ${secondaryHighlight};
      font-size: 16px;
      font-weight: bold;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: ${buttonHover};
      }
    `,
  };
};

export default useStyles;
