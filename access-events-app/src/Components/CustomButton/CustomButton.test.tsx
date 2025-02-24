import { render, screen } from "@testing-library/react";
import CustomButton from "./index";

describe("CustomButton", () => {
  it("renderiza o botão com o texto fornecido", () => {
    render(<CustomButton>Clique aqui</CustomButton>);

    const buttonElement = screen.getByText(/clique aqui/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
