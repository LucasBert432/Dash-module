import { useThemeStore } from "../../globalStore/globalStore";
import { Flex } from "../Flex/Flex.component";
import useStyles from "./AccessCircule.styles";

const AccessCircule = () => {
  const isWhite = useThemeStore((state) => state.isWhite);
  const styles = useStyles(isWhite);

  return (
    <Flex align="center" marginBottom={24} gap={12}>
      <div css={styles.circleContainer}>
        <div css={styles.circle}></div>
        <div css={styles.circleInner}></div>
        <div css={styles.circleInner2}></div>
        <div css={styles.circleInner3}></div>
      </div>
    </Flex>
  );
};

export default AccessCircule;
