import { FunctionComponent } from "react";
import { Flex } from "../../../Components/Flex";
import { Title } from "../../../Components/Title";
import { Text } from "../../../Components/Text";
import AccessCircule from "../../../Components/AccessCircule/AccessCircule.component";
import { ButtonTheme } from "../../../Components/ButtonTheme";
import { ContainerController } from "../Components/ContainerController";

export const Page: FunctionComponent = () => {
  return (
    <div>
      <Flex>
        <AccessCircule />
      </Flex>
      <Flex marginBottom={24} align="center">
        <Title level="h1" size="48px" weight="bold">
          Access
        </Title>
        <Text size="12px" weight="normal">
          ACCESS CONTROL EVENTS
        </Text>
      </Flex>
      <Flex marginTop={32}>
        <ContainerController />
      </Flex>
      <Flex marginTop={24} align="center">
        <ButtonTheme text="Trocar tema" />
      </Flex>
    </div>
  );
};
