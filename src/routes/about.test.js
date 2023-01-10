import React from "react";
import { render } from "test-utils";
import About from "./about";

describe("About Router", () => {
  it("should scrolls to top in first render", () => {
    render(<About />);
    expect(window.scrollTo).toBeCalledTimes(1);
  });
});
