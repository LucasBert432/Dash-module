import { FunctionComponent } from "react";
import { RenderIfProps } from "./RenderIf.types";

const RenderIf: FunctionComponent<RenderIfProps> = ({
  condition,
  children,
}) => {
  return condition ? <>{children}</> : null;
};

export default RenderIf;
