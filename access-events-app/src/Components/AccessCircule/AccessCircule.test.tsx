import { render, screen } from "@testing-library/react";
import AccessCircule from "./AccessCircule.component";

describe("AccessCircule", () => {
  it("renderiza o componente corretamente", () => {
    render(<AccessCircule />);

    const circleContainer = screen.getByTestId("circle-container");
    expect(circleContainer).toBeInTheDocument();

    const circle = screen.getByTestId("circle");
    const circleInner = screen.getByTestId("circle-inner");
    const circleInner2 = screen.getByTestId("circle-inner-2");
    const circleInner3 = screen.getByTestId("circle-inner-3");

    expect(circle).toBeInTheDocument();
    expect(circleInner).toBeInTheDocument();
    expect(circleInner2).toBeInTheDocument();
    expect(circleInner3).toBeInTheDocument();
  });
});
