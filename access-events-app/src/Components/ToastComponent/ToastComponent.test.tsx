import { render, screen } from "@testing-library/react";
import { ToastComponent } from "./Toast.component";
import "@testing-library/jest-dom";
import { ToastPosition, ToastVariant } from "./Toast.component.types";

describe("Componente ToastComponent", () => {
  const mensagem = "Mensagem de teste";

  const renderizarToast = (variante: ToastVariant, posicao: ToastPosition) => {
    render(
      <ToastComponent
        message={mensagem}
        variant={variante}
        position={posicao}
      />
    );
  };

  it("deve renderizar com a mensagem correta", () => {
    renderizarToast("success", "top-right");
    const elementoToast = screen.getByText(mensagem);
    expect(elementoToast).toBeInTheDocument();
  });

  it("deve ter a cor de fundo correta para a variante 'success'", () => {
    renderizarToast("success", "top-right");
    const elementoToast = screen.getByText(mensagem);
    expect(elementoToast).toHaveStyle("background-color: #4caf50");
  });

  it("deve ter a cor de fundo correta para a variante 'error'", () => {
    renderizarToast("error", "top-right");
    const elementoToast = screen.getByText(mensagem);
    expect(elementoToast).toHaveStyle("background-color: #f44336");
  });

  it("deve ter a cor de fundo correta para a variante 'warning'", () => {
    renderizarToast("warning", "top-right");
    const elementoToast = screen.getByText(mensagem);
    expect(elementoToast).toHaveStyle("background-color: #ff9800");
  });

  it("deve ter a cor de fundo correta para a variante 'info'", () => {
    renderizarToast("info", "top-right");
    const elementoToast = screen.getByText(mensagem);
    expect(elementoToast).toHaveStyle("background-color: #2196f3");
  });

  it("deve estar posicionado corretamente no canto superior direito", () => {
    renderizarToast("success", "top-right");
    const elementoToast = screen.getByText(mensagem);
    expect(elementoToast).toHaveStyle("top: 20px; right: 20px;");
  });

  it("deve estar posicionado corretamente no canto superior esquerdo", () => {
    renderizarToast("success", "top-left");
    const elementoToast = screen.getByText(mensagem);
    expect(elementoToast).toHaveStyle("top: 20px; left: 20px;");
  });

  it("deve estar posicionado corretamente no canto inferior direito", () => {
    renderizarToast("success", "bottom-right");
    const elementoToast = screen.getByText(mensagem);
    expect(elementoToast).toHaveStyle("bottom: 20px; right: 20px;");
  });

  it("deve estar posicionado corretamente no canto inferior esquerdo", () => {
    renderizarToast("success", "bottom-left");
    const elementoToast = screen.getByText(mensagem);
    expect(elementoToast).toHaveStyle("bottom: 20px; left: 20px;");
  });
});
