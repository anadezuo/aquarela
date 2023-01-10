import React from "react";
import { render } from "test-utils";
import { useProducts } from "hooks/products";
import { buildProducts } from "builders/products";
import Home from "./home";

jest.mock("hooks/products");

describe("Home Router", () => {
  it("should scrolls to top in first render", () => {
    render(<Home />);
    expect(window.scrollTo).toBeCalledTimes(1);
  });

  it("should render with products", () => {
    const products = buildProducts(5);
    useProducts.mockReturnValue(products);
    const { getByText } = render(<Home />);
    expect(getByText(products[0].title)).toBeInTheDocument();
    expect(getByText(products[1].title)).toBeInTheDocument();
  });
});
