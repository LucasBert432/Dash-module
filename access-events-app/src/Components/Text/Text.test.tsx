import { render, screen } from "@testing-library/react";
import { Text } from "./index"; // ou o caminho correto do seu componente

describe("Text", () => {
  it("deve renderizar o conteúdo com o tamanho correto", () => {
    render(<Text size="20px">Texto de teste</Text>);

    const textElement = screen.getByText("Texto de teste");

    // Verifica se o estilo de tamanho está presente no elemento
    expect(textElement).toHaveStyle("font-size: 20px");
  });

  it("deve renderizar o conteúdo com o peso correto", () => {
    render(<Text weight="bold">Texto de teste</Text>);

    const textElement = screen.getByText("Texto de teste");

    // Verifica se o estilo de peso está presente no elemento
    expect(textElement).toHaveStyle("font-weight: bold");
  });

  it("deve renderizar o conteúdo com a cor invertida quando a prop 'invert' for passada", () => {
    render(<Text invert>Texto de teste invertido</Text>);

    const textElement = screen.getByText("Texto de teste invertido");

    // Aqui você pode verificar o estilo específico que a prop 'invert' aplica (se ela estiver invertendo a cor, por exemplo)
    expect(textElement).toHaveStyle("color: rgb(209, 206, 206)"); // Exemplo de verificação, substitua de acordo com a lógica de estilos
  });

  it("deve renderizar o conteúdo com o tamanho padrão", () => {
    render(<Text>Texto de teste</Text>);

    const textElement = screen.getByText("Texto de teste");

    // Verifica se o tamanho padrão (16px) está sendo aplicado
    expect(textElement).toHaveStyle("font-size: 16px");
  });

  it("deve renderizar o conteúdo com o peso normal por padrão", () => {
    render(<Text>Texto de teste</Text>);

    const textElement = screen.getByText("Texto de teste");

    // Verifica se o peso normal está sendo aplicado por padrão
    expect(textElement).toHaveStyle("font-weight: normal");
  });
});
