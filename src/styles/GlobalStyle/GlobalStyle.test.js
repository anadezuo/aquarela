import React from "react";
import { render } from "test-utils";
import GlobalStyle from "./GlobalStyle";

describe("match snapshot", () => {
  it("should render global styles", () => {
    render(<GlobalStyle />);
    expect(document.head).toMatchSnapshot();
  });
});
