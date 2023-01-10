import { buildProducts } from "builders/products";
import React from "react";
import { render } from "test-utils";
import Home from "./Home";

describe("Home Page", () => {
  function mount({ products } = {}) {
    return render(<Home products={products} />);
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

  it("should render products/services list", () => {
    const products = buildProducts(8);
    const { getByText } = mount({ products });
    expect(getByText(products[0].title)).toBeInTheDocument();
    expect(getByText(products[1].title)).toBeInTheDocument();
  });
});
