import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import { Flex } from "../../../Components/Flex";
import { Title } from "../../../Components/Title";
import AccessCircule from "../../../Components/AccessCircule/AccessCircule.component";
import { ButtonTheme } from "../../../Components/ButtonTheme";
import { ContainerController } from "../Components/ContainerController";
import useStyles from "./styles";
import LoaderAccess from "../../../Components/LoaderAccess";
import RenderIf from "../../../Components/RenderIf";

const Page: FunctionComponent = () => {
  const styles = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAccess = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);

  return (
    <div css={styles.container}>
      <RenderIf condition={!isLoading}>
        <Flex>
          <AccessCircule />
        </Flex>
        <Flex marginBottom={24} align="center">
          <Title level="h1" size="48px" weight="bold">
            Access
          </Title>
          <Title size="12px" weight="lighter">
            ACCESS CONTROL EVENTS
          </Title>
        </Flex>
        <Flex marginTop={32}>
          <ContainerController onClick={handleAccess} />
        </Flex>
        <Flex marginTop={24} align="center">
          <ButtonTheme text="Trocar tema" />
        </Flex>
      </RenderIf>
      <RenderIf condition={isLoading}>
        <div>
          <LoaderAccess />
          <Title level="h2" size="22px" weight="lighter">
            Bem-vindo...
          </Title>
        </div>
      </RenderIf>
    </div>
  );
};

export default Page;
