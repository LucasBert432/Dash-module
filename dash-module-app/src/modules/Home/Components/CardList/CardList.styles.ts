import { css } from "@emotion/react";
import useThemeStyles from "../../../../hook/useThemeStyles";

const useStyles = () => {
  const { buttonBg, buttonHover, textColor } = useThemeStyles();

  return {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    `,

    addButton: css`
      background-color: ${buttonBg};
      color: ${textColor};
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 20px;
      transition: background 0.3s;

      &:hover {
        background-color: ${buttonHover};
      }
    `,

    cardGrid: css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 900px;
    `,
  };
};

export default useStyles;
