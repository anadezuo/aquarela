import React from "react";
import { render } from "test-utils";
import Home from "./Home";

describe("Home Page", () => {
  function mount({} = {}) {
    return render(<Home />);
  }

  it("should render page title", () => {
    const { getByRole } = mount({});
    expect(
      getByRole("heading", {
        name: /inspire um mundo mais colorido/i,
      })
    );
  });

  it("should render sections", () => {
    const { getByText } = mount({});
    expect(getByText("Conteúdo das aulas")).toBeInTheDocument();
    expect(getByText("Quem sou eu")).toBeInTheDocument();
    expect(getByText("Dúvidas frequentes")).toBeInTheDocument();
  });

  it("should scrolls to top in first render", () => {
    mount();
    expect(window.scrollTo).toBeCalledTimes(1);
  });
});
