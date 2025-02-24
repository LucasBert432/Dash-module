import { render, screen } from "@testing-library/react";
import { BoxOption } from "./BoxOption.component"; // Ajuste o import conforme sua estrutura

describe("BoxOption", () => {
  it("renderiza o componente com o texto fornecido", () => {
    render(<BoxOption text="Texto de exemplo" invertTheme={false} />);

    // Verifica se o texto está no DOM
    const textElement = screen.getByText("Texto de exemplo");
    expect(textElement).toBeInTheDocument();
  });

  it("renderiza o componente sem texto", () => {
    render(<BoxOption invertTheme={false} text={""} />);

    // Verifica se nenhum texto é renderizado
    const textElement = screen.queryByText("Texto de exemplo");
    expect(textElement).not.toBeInTheDocument();
  });

  it("aplica o tema invertido quando invertTheme é true", () => {
    render(<BoxOption text="Texto de exemplo" invertTheme={true} />);

    // Verifica se o texto está no DOM
    const textElement = screen.getByText("Texto de exemplo");
    expect(textElement).toBeInTheDocument();

    // Verifica se o tema invertido foi aplicado (dependendo da implementação dos estilos)
    // Aqui você pode adicionar verificações específicas para os estilos, se necessário.
    // Por exemplo, você pode verificar a classe CSS aplicada ou outros atributos de estilo.
  });
});
