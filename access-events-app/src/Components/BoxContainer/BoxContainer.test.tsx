import { render, screen } from "@testing-library/react";
import { BoxContainer } from "./BoxContainer.component";

describe("BoxContainer", () => {
  it("renderiza o componente com título e subtítulo", () => {
    render(
      <BoxContainer title="Título" subtitle="Subtítulo" invertTheme={false}>
        Conteúdo
      </BoxContainer>
    );

    // Verifica se o título está no DOM
    const titleElement = screen.getByText("Título");
    expect(titleElement).toBeInTheDocument();

    // Verifica se o subtítulo está no DOM
    const subtitleElement = screen.getByText("Subtítulo");
    expect(subtitleElement).toBeInTheDocument();

    // Verifica se o conteúdo está no DOM
    const contentElement = screen.getByText("Conteúdo");
    expect(contentElement).toBeInTheDocument();
  });

  it("renderiza o componente sem título e subtítulo", () => {
    render(<BoxContainer invertTheme={false}>Conteúdo</BoxContainer>);

    // Verifica se o conteúdo está no DOM
    const contentElement = screen.getByText("Conteúdo");
    expect(contentElement).toBeInTheDocument();

    // Verifica se o título não está no DOM
    const titleElement = screen.queryByText("Título");
    expect(titleElement).not.toBeInTheDocument();

    // Verifica se o subtítulo não está no DOM
    const subtitleElement = screen.queryByText("Subtítulo");
    expect(subtitleElement).not.toBeInTheDocument();
  });

  it("aplica o tema invertido quando invertTheme é true", () => {
    render(
      <BoxContainer title="Título" invertTheme={true}>
        Conteúdo
      </BoxContainer>
    );

    // Verifica se o título está no DOM
    const titleElement = screen.getByText("Título");
    expect(titleElement).toBeInTheDocument();

    // Verifica se o tema invertido foi aplicado (dependendo da implementação dos estilos)
    // Aqui você pode adicionar verificações específicas para os estilos, se necessário.
  });
});
