import { render, screen } from "@testing-library/react";
import RenderIf from "./index"; // ou o caminho correto do seu componente

describe("RenderIf", () => {
  it("deve renderizar o conteúdo quando a condição for verdadeira", () => {
    render(
      <RenderIf condition={true}>
        <div>Conteúdo visível</div>
      </RenderIf>
    );

    // Verifica se o conteúdo foi renderizado
    expect(screen.getByText("Conteúdo visível")).toBeInTheDocument();
  });

  it("não deve renderizar o conteúdo quando a condição for falsa", () => {
    render(
      <RenderIf condition={false}>
        <div>Conteúdo não visível</div>
      </RenderIf>
    );

    // Verifica se o conteúdo não foi renderizado
    expect(screen.queryByText("Conteúdo não visível")).not.toBeInTheDocument();
  });
});
