import "./App.css";
import GlobalStyles from "./globalStyles";
import AppRoutes from "./AppRoutes";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </>
  );
}

export default App;
