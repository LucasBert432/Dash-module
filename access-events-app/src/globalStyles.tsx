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
          font-family: "Montserrat", sans-serif;
          word-break: break-word;
        }

        body {
          background-color: ${isWhite ? "#FFFFFF" : "rgba(51, 51, 51, 1)"};
          transition: background-color 0.3s ease-in-out;
        }

        .no-scroll {
          overflow: hidden;
        }
      `}
    />
  );
};

export default GlobalStyles;
