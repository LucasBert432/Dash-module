import { FunctionComponent } from "react";
import { Flex } from "../../../Components/Flex";
import { Title } from "../../../Components/Title";
import Header from "../../../Components/Header";
import CardList from "../Components/CardList";
import { Text } from "../../../Components/Text";
export const Home: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Flex marginBottom={24} align="center">
        <Title level="h1" size="32px" weight="bold">
          Access
        </Title>
        <Text size="16px" weight="normal">
          testando
        </Text>
        <CardList />
      </Flex>
    </div>
  );
};
