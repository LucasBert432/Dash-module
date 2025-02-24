import { render, screen } from "@testing-library/react";
import { Title } from "./Title.component";

describe("Title", () => {
  it("deve renderizar o título com a tag h1 por padrão", () => {
    render(<Title>Testando o Título</Title>);

    const titleElement = screen.getByText("Testando o Título");
    // Verifica se a tag usada é <h1>
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
  });

  it("deve renderizar o título com a tag h2 quando a prop 'level' for 'h2'", () => {
    render(<Title level="h2">Testando o Título com h2</Title>);

    const titleElement = screen.getByText("Testando o Título com h2");
    // Verifica se a tag usada é <h2>
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H2");
  });

  it("deve aplicar o tamanho correto conforme a prop 'size'", () => {
    render(<Title size="32px">Testando Tamanho</Title>);

    const titleElement = screen.getByText("Testando Tamanho");
    // Verifica se a cor foi aplicada corretamente (dependendo de como 'useStyles' define o estilo)
    expect(titleElement).toHaveStyle("font-size: 32px");
  });

  it("deve aplicar o peso correto conforme a prop 'weight'", () => {
    render(<Title weight="bold">Testando Peso</Title>);

    const titleElement = screen.getByText("Testando Peso");
    // Verifica se o peso da fonte foi aplicado corretamente
    expect(titleElement).toHaveStyle("font-weight: bold");
  });

  it("deve aplicar o tema invertido quando 'invertTheme' for true", () => {
    render(<Title invertTheme={true}>Testando Tema Invertido</Title>);

    const titleElement = screen.getByText("Testando Tema Invertido");
    // Verifica se a cor foi invertida, por exemplo, se mudar a cor de fundo ou cor do texto.
    // Este valor depende de como 'useStyles' trata a prop 'invertTheme'
    expect(titleElement).toHaveStyle("color: rgb(255, 255, 255)"); // Ajuste conforme a lógica no seu código.
  });

  it("deve renderizar o conteúdo passado como filhos", () => {
    render(<Title>Texto Personalizado</Title>);

    const titleElement = screen.getByText("Texto Personalizado");
    expect(titleElement).toBeInTheDocument();
  });
});
