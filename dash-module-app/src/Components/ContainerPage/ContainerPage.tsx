import { FunctionComponent } from "react";
import useStyles from "./ContainerPage.styles";
import { ContainerProps } from "./ContainerPage.types";

export const ContainerPage: FunctionComponent<ContainerProps> = ({
  isWhite = false,
  children,
}) => {
  const styles = useStyles(isWhite);

  return <div css={styles.container}>{children}</div>;
};
