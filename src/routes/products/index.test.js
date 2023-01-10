import React from "react";
import { render } from "test-utils";
import { useProduct } from "hooks/products";
import { buildProduct } from "builders/products";
import ProductDetails from ".";

jest.mock("hooks/products");

describe("Product Details Router", () => {
  it("should scrolls to top in first render", () => {
    render(<ProductDetails />);
    expect(window.scrollTo).toBeCalledTimes(1);
  });

  it("should render with a product", () => {
    const product = buildProduct();
    useProduct.mockReturnValue(product);
    const { getByText } = render(<ProductDetails />);
    expect(getByText(product.title, { selector: "h1" })).toBeInTheDocument();
  });

  it("should render not found page when product not exists", () => {
    useProduct.mockReturnValue(null);
    const { getByText } = render(<ProductDetails />);
    expect(getByText("Serviço não encontrado")).toBeInTheDocument();
  });
});
