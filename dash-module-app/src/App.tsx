import "./App.css";
import AccessCircule from "./Components/AccessCircule/AccessCircule.component";
import { ButtonTheme } from "./Components/ButtonTheme";
import { Flex } from "./Components/Flex/Flex.component";
import { useThemeStore } from "./globalStore/globalStore";
import GlobalStyles from "./globalStyles";
import { Page } from "./modules/Page";

function App() {
  const isWhite = useThemeStore((state) => state.isWhite);
  return (
    <>
      <GlobalStyles isWhite={isWhite} />
      <Flex>
        <AccessCircule />
        <Page />
      </Flex>
      <Flex marginTop={24} align="center">
        <ButtonTheme text="Trocar tema" isWhite={isWhite} />
      </Flex>
    </>
  );
}

export default App;
