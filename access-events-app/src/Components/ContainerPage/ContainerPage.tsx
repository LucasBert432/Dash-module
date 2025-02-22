import { FunctionComponent } from "react";
import useStyles from "./ContainerPage.styles";
import { ContainerProps } from "./ContainerPage.types";

export const ContainerPage: FunctionComponent<ContainerProps> = ({
  children,
  size,
}) => {
  const styles = useStyles(size);

  return <div css={styles.container}>{children}</div>;
};
