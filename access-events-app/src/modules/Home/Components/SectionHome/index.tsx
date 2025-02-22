import { FunctionComponent } from "react";
import { Flex } from "../../../../Components/Flex";
import AccessCircule from "../../../../Components/AccessCircule/AccessCircule.component";
import { Title } from "../../../../Components/Title";
import { Text } from "../../../../Components/Text";
import { ContainerDefault } from "../../../../Components/ContainerDefault";
import useStyles from "./styles";
import RenderIf from "../../../../Components/RenderIf";
import { useMediaQuery } from "@mui/material";
import { ButtonTheme } from "../../../../Components/ButtonTheme";

const SectionHome: FunctionComponent = () => {
  const styles = useStyles();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div css={styles.wrapper}>
      <ContainerDefault>
        <div css={styles.wrapperThemeButton}>
          <ButtonTheme text="Trocar tema" />
        </div>
        <Flex justify="flex-start" align="flex-start" direction="row">
          <RenderIf condition={!isMobile}>
            <div css={styles.wrapperCircule}>
              <AccessCircule />
            </div>
          </RenderIf>
          <div>
            <Title level="h1" size="62px" weight="bold">
              Access Eventos
            </Title>
            <Text size="18px" weight="normal">
              Todos os eventos em um só lugar.
            </Text>
          </div>
        </Flex>
      </ContainerDefault>
    </div>
  );
};

export default SectionHome;
