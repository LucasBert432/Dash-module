import { render, screen } from "@testing-library/react";
import Card from "./Card.Component";

describe("Card", () => {
  const defaultProps = {
    image: "https://via.placeholder.com/150",
    title: "Card Title",
    location: "Location",
    date: "2025-02-23",
  };

  it("deve renderizar o componente com as informações corretas", () => {
    render(<Card {...defaultProps} />);

    // Verifica se o título está no documento
    const title = screen.getByText(defaultProps.title);
    expect(title).toBeInTheDocument();

    // Verifica se a localização está no documento
    const location = screen.getByText(defaultProps.location);
    expect(location).toBeInTheDocument();

    // Verifica se a data está no documento
    const date = screen.getByText(defaultProps.date);
    expect(date).toBeInTheDocument();

    // Verifica se a imagem está sendo renderizada com o src correto
    const image = screen.getByAltText(defaultProps.title) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(defaultProps.image);
  });

  it("deve renderizar a imagem com o src correto", () => {
    render(<Card {...defaultProps} />);

    // Verifica se a imagem está sendo renderizada com o src correto
    const image = screen.getByAltText(defaultProps.title) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(defaultProps.image);
  });

  it("deve renderizar corretamente quando as props forem diferentes", () => {
    const props = {
      image: "https://via.placeholder.com/200",
      title: "New Title",
      location: "New Location",
      date: "2025-05-01",
    };

    render(<Card {...props} />);

    // Verifica se o título, localização e data estão no documento
    const title = screen.getByText(props.title);
    const location = screen.getByText(props.location);
    const date = screen.getByText(props.date);

    expect(title).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(date).toBeInTheDocument();

    // Verifica se a imagem está sendo renderizada com o novo src
    const image = screen.getByAltText(props.title) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(props.image);
  });
});
