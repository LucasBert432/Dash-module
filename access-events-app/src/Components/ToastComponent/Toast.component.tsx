import React from "react";
import { css } from "@emotion/react";
import {
  ToastPosition,
  ToastProps,
  ToastVariant,
} from "./Toast.component.types";
import { getVariantColor } from "./Toast.contants";

const toastStyles = (variant: ToastVariant, position: ToastPosition) => css`
  position: fixed;
  ${position === "top-right" && "top: 20px; right: 20px;"}
  ${position === "top-left" && "top: 20px; left: 20px;"}
  ${position === "bottom-right" && "bottom: 20px; right: 20px;"}
  ${position === "bottom-left" && "bottom: 20px; left: 20px;"}
  background-color: ${getVariantColor(variant)};
  color: white;
  padding: 16px;
  border-radius: 4px;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ToastComponent: React.FC<ToastProps> = ({
  message,
  variant,
  position,
}) => {
  return <div css={toastStyles(variant, position)}>{message}</div>;
};
