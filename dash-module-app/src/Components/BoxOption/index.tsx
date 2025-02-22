import { FunctionComponent } from "react";
import useStyles from "./styles";
import { BoxOptionProps } from "./types";
import Icon from "../Icons";
import { Title } from "../Title";

export const BoxOption: FunctionComponent<BoxOptionProps> = ({
  text,
  invertTheme,
}) => {
  const styles = useStyles(invertTheme);

  return (
    <>
      <div css={styles.container}>
        <Icon name="calendar-icon" size={"24px"} />
        <Title
          weight="lighter"
          level="h3"
          size="16px"
          invertTheme={invertTheme}
        >
          {text}
        </Title>
      </div>
    </>
  );
};

export default BoxOption;
