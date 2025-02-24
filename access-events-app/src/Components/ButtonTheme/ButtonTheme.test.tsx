import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonTheme } from "./ButtonTheme.component"; // Ajuste o caminho conforme necessário
import { useThemeStore } from "../../globalStore/globalStore"; // Para mockar o store
import { useMediaQuery } from "@mui/material";

// Mock para o useThemeStore e useMediaQuery
jest.mock("../../globalStore/globalStore", () => ({
  useThemeStore: jest.fn(),
}));

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useMediaQuery: jest.fn(),
}));

describe("ButtonTheme", () => {
  let toggleThemeMock: jest.Mock;
  let isWhite: boolean;

  beforeEach(() => {
    toggleThemeMock = jest.fn();
    isWhite = true;

    // Usa o tipo 'unknown' para o mock do store
    (useThemeStore as unknown as jest.Mock).mockReturnValue({
      toggleTheme: toggleThemeMock,
      isWhite,
    });

    // Resetando o mock do useMediaQuery
    (useMediaQuery as jest.Mock).mockReset();
  });

  it("deve renderizar o botão com o texto fornecido", () => {
    render(<ButtonTheme text="Mudar Tema" onClick={jest.fn()} />);

    // Verifica se o texto do botão está presente
    const buttonText = screen.getByText("Mudar Tema");
    expect(buttonText).toBeInTheDocument();
  });

  it("deve chamar toggleTheme quando o botão for clicado", () => {
    render(<ButtonTheme text="Mudar Tema" onClick={jest.fn()} />);

    // Envia o evento de clique no botão
    const button = screen.getByText("Mudar Tema");
    fireEvent.click(button);

    // Verifica se toggleTheme foi chamado
    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  it("deve renderizar o IconButton para dispositivos móveis", () => {
    // Simula o valor de isMobile para testar a renderização no dispositivo móvel
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    render(<ButtonTheme text="Mudar Tema" onClick={jest.fn()} />);
  });

  it("não deve renderizar o botão para dispositivos móveis", () => {
    // Simula o valor de isMobile para testar a renderização no dispositivo móvel
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    render(<ButtonTheme text="Mudar Tema" onClick={jest.fn()} />);

    // Verifica se o botão não está presente
    const button = screen.queryByText("Mudar Tema");
    expect(button).not.toBeInTheDocument();
  });

  it("deve renderizar o botão para desktop", () => {
    // Simula o valor de isMobile para testar a renderização no desktop
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(<ButtonTheme text="Mudar Tema" onClick={jest.fn()} />);

    // Verifica se o botão é renderizado para desktop
    const button = screen.getByText("Mudar Tema");
    expect(button).toBeInTheDocument();
  });
});
