import { css, keyframes } from "@emotion/react";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const useStyles = (isWhite: boolean) => {
  const color = isWhite ? "#000000" : "#00ff99";

  return {
    circleContainer: css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      position: relative;
    `,
    circle: css`
      width: 80px;
      height: 80px;
      border: 5px solid transparent;
      border-top: 5px solid ${color};
      border-radius: 50%;
      animation: ${rotate} 1.5s linear infinite;
      position: absolute;
    `,
    circleInner: css`
      width: 80px;
      height: 80px;
      border: 5px solid transparent;
      border-left: 5px solid ${color};
      border-radius: 50%;
      animation: ${rotate} 1.5s linear infinite reverse;
      position: absolute;
    `,
    circleInner2: css`
      width: 60px;
      height: 60px;
      border: 5px solid transparent;
      border-right: 5px solid ${color};
      border-radius: 50%;
      animation: ${rotate} 2s linear infinite reverse;
      position: absolute;
    `,
    circleInner3: css`
      width: 40px;
      height: 40px;
      border: 5px solid transparent;
      border-bottom: 5px solid ${color};
      border-radius: 50%;
      animation: ${rotate} 2.5s linear infinite;
      position: absolute;
    `,
  };
};

export default useStyles;
