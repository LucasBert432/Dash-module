import { FunctionComponent, JSX } from "react";
import { TitleProps } from "./Title.types";
import useStyles from "./Title.styles";

export const Title: FunctionComponent<TitleProps> = ({
  children,
  level = "h1",
  size,
  weight,
}) => {
  const styles = useStyles(size, weight);

  const Tag = level as keyof JSX.IntrinsicElements;

  return <Tag css={styles.title}>{children}</Tag>;
};
