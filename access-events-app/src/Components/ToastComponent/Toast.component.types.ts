export type ToastProps = {
  message: string;
  variant: ToastVariant;
  position: ToastPosition;
};
export type ToastVariant = "success" | "error" | "warning" | "info";
export type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";
