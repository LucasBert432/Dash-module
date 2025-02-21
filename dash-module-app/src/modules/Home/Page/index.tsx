import { FunctionComponent } from "react";
import { Flex } from "../../../Components/Flex";
import { Title } from "../../../Components/Title";
import Header from "../../../Components/Header";
import CardList from "../Components/CardList";

export const Home: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Flex marginBottom={24} align="center">
        <Title level="h1" size="42px">
          Access
        </Title>
        <CardList />
      </Flex>
    </div>
  );
};
