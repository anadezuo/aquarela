import React from "react";
import { render, userEvent, waitFor } from "test-utils";
import { buildProducts } from "builders/products";
import ProductGrid from "./ProductGrid";

const ALL_PRODUCTS = "Lista completa de serviços";
const HIDE_PRODUCTS = "Esconder lista de serviços";

describe("Product Grid", () => {
  function mount({ products } = {}) {
    return render(<ProductGrid products={products} />);
  }

  it("should show three products by default and hide show more button", () => {
    const { getAllByRole, queryByText } = mount({ products: buildProducts(3) });

    expect(getAllByRole("heading").length).toEqual(3);
    expect(queryByText(ALL_PRODUCTS)).not.toBeInTheDocument();
  });

  it("should show more products on click show more button", async () => {
    const products = buildProducts(4);
    const { getByText } = mount({ products });
    userEvent.click(getByText(ALL_PRODUCTS));
    await waitFor(() => {
      expect(getByText(products[3].title)).toBeInTheDocument();
      expect(getByText(HIDE_PRODUCTS)).toBeInTheDocument();
    });
  });
});
