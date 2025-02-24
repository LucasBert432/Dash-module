import { render, screen } from "@testing-library/react";
import LoaderAccess from "./index";

// Mock do componente AccessCircule
jest.mock("../AccessCircule/AccessCircule.component", () => {
  return jest.fn(() => <div>AccessCircule</div>);
});

describe("LoaderAccess", () => {
  it("deve renderizar o componente AccessCircule", () => {
    render(<LoaderAccess />);

    // Verifica se o texto "AccessCircule" foi renderizado, o que significa que o componente foi renderizado
    expect(screen.getByText("AccessCircule")).toBeInTheDocument();
  });
});
