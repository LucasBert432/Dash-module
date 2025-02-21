import { Global, css } from "@emotion/react";
import { FunctionComponent } from "react";
import { useThemeStore } from "./globalStore/globalStore";

const GlobalStyles: FunctionComponent = () => {
  const { isWhite } = useThemeStore();

  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background-color: ${isWhite ? "#FFFFFF" : "rgba(51, 51, 51, 1)"};
          color: ${isWhite ? "rgba(57, 233, 145, 1)" : "#333"};
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          transition: background-color 0.3s ease-in-out;
        }
      `}
    />
  );
};

export default GlobalStyles;
