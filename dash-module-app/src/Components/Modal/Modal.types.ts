import { ReactNode } from "react";

export type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};
