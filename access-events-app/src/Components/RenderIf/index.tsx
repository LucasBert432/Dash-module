import React from "react";
import { FunctionComponent } from "react";
import { RenderIfProps } from "./RenderIf.types";

const RenderIf: FunctionComponent<RenderIfProps> = ({
  condition,
  children,
}) => {
  if (!condition) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default RenderIf;
