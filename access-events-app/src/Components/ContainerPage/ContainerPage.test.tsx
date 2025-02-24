// ContainerPage.test.tsx
import { render, screen } from "@testing-library/react";
import { ContainerPage } from "./ContainerPage";

describe("ContainerPage Component", () => {
  it("deve renderizar corretamente sem filhos", () => {
    render(<ContainerPage />);

    // Verifica se o elemento com 'data-testid="container-page"' está no DOM
    const container = screen.getByTestId("container-page");

    // Verifica se o container está no DOM e está vazio
    expect(container).toBeInTheDocument();
    expect(container).toBeEmptyDOMElement();
  });

  it("deve renderizar corretamente com filhos", () => {
    render(<ContainerPage>Conteúdo</ContainerPage>);

    // Verifica se o conteúdo foi renderizado dentro do container
    const container = screen.getByTestId("container-page");
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Conteúdo");
  });

  it("deve aplicar o estilo correto baseado no prop 'size'", () => {
    render(<ContainerPage size="large">Conteúdo</ContainerPage>);

    // Busca o elemento com 'data-testid="container-page"'
    const container = screen.getByTestId("container-page");

    // Verifica se a classe gerada pelo estilo de "size" foi aplicada corretamente
    // Ajuste conforme a classe ou o estilo que é aplicado pelo seu useStyles
    expect(container).toHaveClass("css-1c18cdw"); // Verifique o nome correto da classe gerada ou altere para o estilo esperado
  });
});
