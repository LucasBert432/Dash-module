import { FunctionComponent } from "react";
import { BoxContainer } from "../../../../Components/BoxContainer/BoxContainer.component";
import useStyles from "./styles";
import AboutAccessEvents from "./Component/AboutAccessEvents";

const About: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <div css={styles.wrapper}>
      <BoxContainer
        invertTheme
        title="Sobre"
        subtitle="Saiba um pouco sobre nós."
      >
        <AboutAccessEvents />
      </BoxContainer>
    </div>
  );
};

export default About;
