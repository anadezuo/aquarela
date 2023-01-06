import React from "react";
import { render } from "test-utils";
import About from "./About";

describe("About Page", () => {
  function mount({} = {}) {
    return render(<About />);
  }

  it("should render page title", () => {
    const { getAllByText } = mount({});
    expect(getAllByText("Aquarela")).toHaveLength(2);
  });

  it("should render section mission and vision", () => {
    const { getByText } = mount({});
    expect(getByText("Missão")).toBeInTheDocument();
    expect(getByText("Visão")).toBeInTheDocument();
  });

  it("should scrolls to top in first render", () => {
    mount();
    expect(window.scrollTo).toBeCalledTimes(1);
  });
});
