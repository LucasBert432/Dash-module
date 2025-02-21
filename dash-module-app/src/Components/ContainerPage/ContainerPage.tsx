import { FunctionComponent } from "react";
import useStyles from "./ContainerPage.styles";
import { ContainerProps } from "./ContainerPage.types";

export const ContainerPage: FunctionComponent<ContainerProps> = ({
  children,
}) => {
  const styles = useStyles();

  return <div css={styles.container}>{children}</div>;
};
