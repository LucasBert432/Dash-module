import { FunctionComponent } from "react";
import useStyles from "./ContainerDefault.styles";
import { ContainerProps } from "@mui/material";

export const ContainerDefault: FunctionComponent<ContainerProps> = ({
  children,
}) => {
  const styles = useStyles();

  return (
    <div data-testid="container-default" css={styles.container}>
      {children}
    </div>
  );
};
