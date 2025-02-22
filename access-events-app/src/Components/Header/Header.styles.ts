import { css } from "@emotion/react";
import useThemeStyles from "../../hook/useThemeStyles";

const useStyles = () => {
  const styles = useThemeStyles();

  return {
    header: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background-color: ${styles.backgroundColor};
      color: ${styles.textColor};
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
    `,

    logo: css`
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
    `,

    menuButton: css`
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      display: block;
      @media (min-width: 768px) {
        display: none;
      }
    `,

    nav: css`
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: ${styles.backgroundColor};
      display: none;
      height: 250px;

      flex-direction: column;
      align-items: center;
      padding: 15px 0;
      transition: transform 0.3s ease-in-out;
      @media (min-width: 768px) {
        display: flex;
        position: static;
        flex-direction: row;
        background: none;
        height: auto;
        width: auto;
        padding: 0;
      }
    `,

    navOpen: css`
      display: flex;
    `,

    menu: css`
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 0;
      margin: 0;
      text-align: center;
      @media (min-width: 768px) {
        flex-direction: row;
        gap: 20px;
      }
    `,

    menuItem: css`
      cursor: pointer;
      font-size: 18px;
      text-decoration: none;
      color: ${styles.textColor};
      background-color: red;

      transition: color 0.3s ease-in-out;
      &:hover {
        color: ${styles.invertBackgroundColor} !important;
      }
    `,
  };
};

export default useStyles;
