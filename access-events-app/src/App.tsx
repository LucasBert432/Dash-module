import "./App.css";
import GlobalStyles from "./globalStyles";
import AppRoutes from "./AppRoutes";
import { ModalProvider } from "./contexts/ModalContext";
import { ToastProvider } from "./contexts/ToastContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastProvider>
        <ModalProvider>
          <AppRoutes />
        </ModalProvider>
      </ToastProvider>
    </>
  );
}

export default App;
