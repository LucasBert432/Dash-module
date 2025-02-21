import { css } from "@emotion/react";
import { FlexStylesProps } from "./Flex.types";

export const useStyles = ({
  direction,
  justify,
  align,
  gap,
  wrap,
  marginBottom,
  marginTop,
}: FlexStylesProps) => ({
  flex: css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap}px;
    flex-wrap: ${wrap ? "wrap" : "nowrap"};
    width: 100%;
    margin-bottom: ${marginBottom}px;
    margin-top: ${marginTop}px;
  `,
});
