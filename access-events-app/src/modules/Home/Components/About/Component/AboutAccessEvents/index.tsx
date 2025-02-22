import { FunctionComponent } from "react";
import { Text } from "../../../../../../Components/Text";
import useStyles from "./styles";

const AboutAccessEvents: FunctionComponent = () => {
  const styles = useStyles();

  return (
    <div css={styles.container}>
      <div css={styles.title}>
        <Text invert size="24px" weight="bold">
          O que é a Access Events?
        </Text>
      </div>
      <div css={styles.description}>
        <Text invert size="16px">
          A **Access Events** é uma plataforma inovadora projetada para
          facilitar a captura de solicitações e promover eventos de maneira
          eficiente. Nosso objetivo é ajudar na organização e divulgação de
          eventos, permitindo que os organizadores criem facilmente eventos e
          promovam a participação de um público interessado.
        </Text>
      </div>
      <div css={styles.description}>
        <Text invert size="16px">
          Com a **Access Events**, você pode criar eventos, fazer a gestão de
          inscrições, compartilhar informações sobre atividades, horários,
          locais e muito mais. A plataforma também oferece uma maneira de
          divulgar eventos, garantindo que sua audiência tenha acesso rápido a
          todos os detalhes necessários.
        </Text>
      </div>
    </div>
  );
};

export default AboutAccessEvents;
