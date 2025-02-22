import { FunctionComponent } from "react";
import { BoxContainerProps } from "./types";
import useStyles from "./styles";
import { Title } from "../Title";

export const BoxContainer: FunctionComponent<BoxContainerProps> = ({
  title,
  subtitle,
  children,
  invertTheme,
}) => {
  const styles = useStyles(invertTheme);

  return (
    <div css={styles.container}>
      {title && (
        <div css={styles.title}>
          {
            <Title level="h1" size="32px" invertTheme={invertTheme}>
              {title}
            </Title>
          }
        </div>
      )}

      {subtitle && (
        <div css={styles.subtitle}>
          {
            <Title
              weight="normal"
              level="h3"
              size="20px"
              invertTheme={invertTheme}
            >
              {subtitle}
            </Title>
          }
        </div>
      )}

      <div css={styles.childrenContainer}>{children}</div>
    </div>
  );
};
