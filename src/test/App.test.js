import React from "react";
import ReactDOM from "react-dom";

import { BackgroundImage } from "../components/Background";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BackgroundImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
