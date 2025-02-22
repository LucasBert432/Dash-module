import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const { backgroundColor, textColor } = useThemeStyles();

  return {
    overlay: css`
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    `,
    modal: css`
      background-color: ${backgroundColor};
      color: ${textColor};
      padding: 20px;
      border-radius: 8px;
      width: 90%;
      max-width: 400px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    `,
  };
};

export default useStyles;
