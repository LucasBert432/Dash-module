/** @jsxImportSource @emotion/react */
import { Flex } from "../Flex/Flex.component";
import useStyles from "./AccessCircule.styles";

const AccessCircule = () => {
  const styles = useStyles();

  return (
    <Flex align="center" marginBottom={24} gap={12}>
      <div css={styles.circleContainer} data-testid="circle-container">
        <div css={styles.circle} data-testid="circle"></div>
        <div css={styles.circleInner} data-testid="circle-inner"></div>
        <div css={styles.circleInner2} data-testid="circle-inner-2"></div>
        <div css={styles.circleInner3} data-testid="circle-inner-3"></div>
      </div>
    </Flex>
  );
};

export default AccessCircule;
