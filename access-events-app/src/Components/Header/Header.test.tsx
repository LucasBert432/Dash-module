// Flex.test.tsx
import { render, screen } from "@testing-library/react";
import { Flex } from "../Flex";

// Teste para verificar a renderização do componente
describe("Flex Component", () => {
  it("deve renderizar corretamente com filhos", () => {
    render(
      <Flex>
        <div>Filho 1</div>
        <div>Filho 2</div>
      </Flex>
    );
    const filho1 = screen.getByText("Filho 1");
    const filho2 = screen.getByText("Filho 2");

    expect(filho1).toBeInTheDocument();
    expect(filho2).toBeInTheDocument();
  });

  it("deve aplicar as props padrão", () => {
    render(
      <Flex>
        <div>Filho</div>
      </Flex>
    );

    // Verifica se o comportamento padrão (direction="column") está sendo aplicado
    const flexContainer = screen.getByText("Filho").parentElement;
    expect(flexContainer).toHaveStyle("flex-direction: column");

    // Verifica se a propriedade justify="flex-start" é aplicada
    expect(flexContainer).toHaveStyle("justify-content: flex-start");

    // Verifica se a propriedade align="stretch" é aplicada
    expect(flexContainer).toHaveStyle("align-items: stretch");

    // Verifica se gap=0 está aplicado
    expect(flexContainer).toHaveStyle("gap: 0px");
  });

  it("deve aplicar as props personalizadas", () => {
    render(
      <Flex
        direction="row"
        justify="center"
        align="center"
        gap={10}
        wrap={true}
        marginBottom={20}
        marginTop={10}
      >
        <div>Filho 1</div>
        <div>Filho 2</div>
      </Flex>
    );

    const flexContainer = screen.getByText("Filho 1").parentElement;

    // Verifica se a propriedade direction="row" foi aplicada
    expect(flexContainer).toHaveStyle("flex-direction: row");

    // Verifica se a propriedade justify="center" foi aplicada
    expect(flexContainer).toHaveStyle("justify-content: center");

    // Verifica se a propriedade align="center" foi aplicada
    expect(flexContainer).toHaveStyle("align-items: center");

    // Verifica se a propriedade gap=10 foi aplicada
    expect(flexContainer).toHaveStyle("gap: 10px");

    // Verifica se wrap=true foi aplicado
    expect(flexContainer).toHaveStyle("flex-wrap: wrap");

    // Verifica se marginBottom e marginTop foram aplicadas
    expect(flexContainer).toHaveStyle("margin-bottom: 20px");
    expect(flexContainer).toHaveStyle("margin-top: 10px");
  });
});
