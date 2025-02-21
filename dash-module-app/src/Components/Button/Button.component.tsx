import { FunctionComponent } from "react";
import { ButtonProps } from "./Button.types";
import useStyles from "./Button.styles";

export const Button: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  const styles = useStyles();

  return (
    <button css={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
