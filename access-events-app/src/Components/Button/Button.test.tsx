import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button.component";

describe("Button", () => {
  it("deve renderizar o componente com o texto fornecido", () => {
    render(<Button text="Clique aqui" onClick={jest.fn()} />);

    // Verifica se o texto "Clique aqui" está presente no botão
    const buttonText = screen.getByText("Clique aqui");
    expect(buttonText).toBeInTheDocument();
  });

  it("deve chamar a função onClick quando o botão for clicado", () => {
    const onClickMock = jest.fn();
    render(<Button text="Clique aqui" onClick={onClickMock} />);

    // Envia o evento de clique
    const button = screen.getByText("Clique aqui");
    fireEvent.click(button);

    // Verifica se a função onClick foi chamada
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("não deve chamar a função onClick se onClick não for fornecida", () => {
    const onClickMock = jest.fn();
    render(<Button text="Clique aqui" onClick={onClickMock} />);

    // Envia o evento de clique
    const button = screen.getByText("Clique aqui");
    fireEvent.click(button);

    // Verifica se a função onClick foi chamada
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
