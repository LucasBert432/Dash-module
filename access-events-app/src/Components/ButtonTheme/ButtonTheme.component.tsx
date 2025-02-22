import { FunctionComponent } from "react";
import { ButtonProps } from "./ButtonTheme.types";
import useStyles from "./ButtonTheme.styles";
import { useThemeStore } from "../../globalStore/globalStore";
import { IconButton, useMediaQuery } from "@mui/material";
import RenderIf from "../RenderIf";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const ButtonTheme: FunctionComponent<ButtonProps> = ({
  text,
  onClick,
}) => {
  const { toggleTheme, isWhite } = useThemeStore();
  const styles = useStyles();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const handleClick = () => {
    toggleTheme();
    if (onClick) onClick();
  };

  return (
    <>
      <RenderIf condition={!isMobile}>
        <button css={styles.button} onClick={handleClick}>
          {text}
        </button>
      </RenderIf>

      <RenderIf condition={isMobile}>
        <IconButton sx={{ ml: 1 }} onClick={handleClick} color={"success"}>
          {isWhite ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </RenderIf>
    </>
  );
};
