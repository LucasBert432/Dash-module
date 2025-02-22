import {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { lockMainScroll, unlockMainScroll } from "../../utils/scrollLock";

export type ModalSettings = {
  title?: string;
  lockable?: boolean;
  width?: number;
  persistent?: boolean;
};

export interface IModalContext {
  showModal(id: string, settings?: ModalSettings): void;
  closeModal(): void;
  open: string;
  settings: ModalSettings;
}

const ModalContext = createContext<IModalContext | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<string>("");
  const [settings, setSettings] = useState<ModalSettings>({});

  const showModal = useCallback(
    (id: string, settings: ModalSettings = {}): void => {
      setSettings(settings);
      setOpen(id);
      lockMainScroll();
    },
    []
  );

  const closeModal = useCallback((): void => {
    setOpen("");
    unlockMainScroll();
  }, []);

  const modalContextValue = useMemo(
    () => ({
      showModal,
      closeModal,
      open,
      settings,
    }),
    [showModal, closeModal, open, settings]
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): IModalContext => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
