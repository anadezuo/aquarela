import React from "react";
import { render, userEvent, waitFor } from "test-utils";
import BgWaterColorKit from "assets/bg-watercolor-kit.jpeg";
import ProductGrid from "./ProductGrid";

const ALL_PRODUCTS = "Lista completa de serviços";
const HIDE_PRODUCTS = "Esconder lista de serviços";

describe("Product Grid", () => {
  function mount({ products } = {}) {
    return render(<ProductGrid products={products} />);
  }

  function buildProducts(length) {
    return new Array(length).fill({}).map((_, index) => ({
      id: index,
      image: BgWaterColorKit,
      title: `Título ${index + 1}`,
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    }));
  }

  it("should show three products by default and hide show more button", () => {
    const { getAllByRole, queryByText } = mount({ products: buildProducts(3) });

    expect(getAllByRole("heading").length).toEqual(3);
    expect(queryByText(ALL_PRODUCTS)).not.toBeInTheDocument();
  });

  it("should show more products on click show more button", async () => {
    const { getByText } = mount({ products: buildProducts(4) });
    userEvent.click(getByText(ALL_PRODUCTS));
    await waitFor(() => {
      expect(getByText("Título 4")).toBeInTheDocument();
      expect(getByText(HIDE_PRODUCTS)).toBeInTheDocument();
    });
  });
});
