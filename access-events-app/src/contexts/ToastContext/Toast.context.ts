import {
  ToastPosition,
  ToastVariant,
} from "../../Components/ToastComponent/Toast.component.types";

export interface Toast {
  message: string;
  variant: ToastVariant;
  position: ToastPosition;
}

export interface ToastContextType {
  toast: (options: Toast) => void;
}
