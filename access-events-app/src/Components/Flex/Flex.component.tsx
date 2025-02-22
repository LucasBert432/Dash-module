import { FunctionComponent } from "react";
import { FlexProps } from "./Flex.types";
import { useStyles } from "./Flex.styles";

export const Flex: FunctionComponent<FlexProps> = ({
  children,
  direction = "column",
  justify = "flex-start",
  align = "stretch",
  gap = 0,
  wrap = false,
  marginBottom = 0,
  marginTop = 0,
}) => {
  const styles = useStyles({
    marginBottom,
    marginTop,
    direction,
    justify,
    align,
    gap,
    wrap,
  });

  return <div css={styles.flex}>{children}</div>;
};
