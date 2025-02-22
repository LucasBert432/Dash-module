import { FunctionComponent } from "react";
import useStyles from "./styles";
import { ContainerProps } from "@mui/material";

export const ContainerDefault: FunctionComponent<ContainerProps> = ({
  children,
}) => {
  const styles = useStyles();

  return <div css={styles.container}>{children}</div>;
};
