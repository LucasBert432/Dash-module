import { FunctionComponent } from "react";
import { useThemeStore } from "../../../globalStore/globalStore";
import { Flex } from "../../../Components/Flex";
import { Title } from "../../../Components/Title";
import { Text } from "../../../Components/Text";
import AccessCircule from "../../../Components/AccessCircule/AccessCircule.component";
import { ButtonTheme } from "../../../Components/ButtonTheme";
import { ContainerController } from "../Components/ContainerController";

export const Page: FunctionComponent = () => {
  const isWhite = useThemeStore((state) => state.isWhite);

  return (
    <div>
      <Flex marginBottom={24} align="center">
        <Title level="h1" size="32px" weight="bold">
          Access
        </Title>
        <Text size="24px" weight="normal">
          ACCESS CONTROL
        </Text>
      </Flex>
      <Flex>
        <AccessCircule />
        <ContainerController />
      </Flex>
      <Flex marginTop={24} align="center">
        <ButtonTheme text="Trocar tema" isWhite={isWhite} />
      </Flex>
    </div>
  );
};
