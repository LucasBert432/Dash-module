import { ToastVariant } from "./Toast.component.types";

export const getVariantColor = (variant: ToastVariant) => {
  switch (variant) {
    case "success":
      return "#4caf50";
    case "error":
      return "#f44336";
    case "warning":
      return "#ff9800";
    case "info":
      return "#2196f3";
    default:
      return "#2196f3";
  }
};
