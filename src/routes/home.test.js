import React from "react";
import { render, screen } from "test-utils";
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
    render(<Home />);
    expect(screen.getByText(products[0].title)).toBeInTheDocument();
    expect(screen.getByText(products[1].title)).toBeInTheDocument();
  });
});
