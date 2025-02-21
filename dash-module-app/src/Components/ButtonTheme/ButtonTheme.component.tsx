import { FunctionComponent } from "react";
import { ButtonProps } from "./ButtonTheme.types";
import useStyles from "./ButtonTheme.styles";
import { useThemeStore } from "../../globalStore/globalStore";

export const ButtonTheme: FunctionComponent<ButtonProps> = ({
  text,
  onClick,
}) => {
  const { toggleTheme } = useThemeStore();
  const styles = useStyles();

  const handleClick = () => {
    toggleTheme();
    if (onClick) onClick();
  };

  return (
    <button css={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};
