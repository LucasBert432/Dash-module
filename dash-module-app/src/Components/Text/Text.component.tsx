import { FunctionComponent } from "react";
import { TextProps } from "./Text.types";
import useStyles from "./Text.styles";

export const Text: FunctionComponent<TextProps> = ({
  children,
  size = "16px",
  weight = "normal",
}) => {
  const styles = useStyles(size, weight);

  return <p css={styles.text}>{children}</p>;
};
