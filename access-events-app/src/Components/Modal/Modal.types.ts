import { ModalSettings } from "../../contexts/ModalContext";

export type ModalProps = {
  id: string;
  onDismiss?: () => void;
};

export type UseStylesProps = {
  settings?: ModalSettings;
  withoutHeader?: boolean;
};
