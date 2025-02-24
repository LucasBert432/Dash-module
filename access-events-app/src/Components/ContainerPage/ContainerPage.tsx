import { FunctionComponent } from "react";
import useStyles from "./ContainerPage.styles";
import { ContainerProps } from "./ContainerPage.types";

export const ContainerPage: FunctionComponent<ContainerProps> = ({
  children,
  size,
}) => {
  const sizeAsNumber = typeof size === "string" ? Number(size) : size;
  const styles = useStyles(sizeAsNumber);

  return (
    <div data-testid="container-page" css={styles.container}>
      {children}
    </div>
  );
};
