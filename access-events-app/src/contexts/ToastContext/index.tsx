import React, { createContext, useContext, useState } from "react";
import {
  ToastComponent,
  ToastPosition,
  ToastVariant,
} from "../../Components/ToastComponent";

interface Toast {
  message: string;
  variant: ToastVariant;
  position: ToastPosition;
}

interface ToastContextType {
  toast: (options: Toast) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toastState, setToastState] = useState<Toast | null>(null);

  const toast = (options: Toast) => {
    setToastState(options);
    setTimeout(() => setToastState(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toastState && (
        <ToastComponent
          message={toastState.message}
          variant={toastState.variant}
          position={toastState.position}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
