import { buildProduct } from "builders/products";
import React from "react";
import { render } from "test-utils";
import ProductDetails from "./ProductDetails";

describe("Product Details Page", () => {
  function mount({ product } = {}) {
    return render(<ProductDetails product={product} />);
  }

  it("should render page title", () => {
    const product = buildProduct();
    const { getByText } = mount({ product });
    expect(getByText(product.title, { selector: "h1" })).toBeInTheDocument();
  });

  it("should render section details of product", () => {
    const product = buildProduct();
    const { getByText } = mount({ product });
    expect(getByText("Documentos necessários:")).toBeInTheDocument();
  });
});
