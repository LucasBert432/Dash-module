import { render, screen } from "@testing-library/react";
import { ContainerDefault } from "./ContainerDefault.component"; // Ajuste o caminho conforme necessário

describe("ContainerDefault", () => {
  it("deve renderizar os filhos corretamente", () => {
    const childrenText = "Texto de exemplo";

    render(<ContainerDefault>{childrenText}</ContainerDefault>);

    // Verifica se o texto dos filhos está no documento
    const children = screen.getByText(childrenText);
    expect(children).toBeInTheDocument();
  });

  it("deve renderizar corretamente sem filhos", () => {
    render(<ContainerDefault />);

    // Verifica se o componente foi renderizado sem filhos
    const container = screen.getByTestId("container-default");
    expect(container).toBeInTheDocument();
    expect(container).toBeEmptyDOMElement();
  });
});
