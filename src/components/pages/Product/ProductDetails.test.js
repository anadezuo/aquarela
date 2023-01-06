import React from "react";
import { render } from "test-utils";
import ProductDetails from "./ProductDetails";

describe("Product Details Page", () => {
  function mount({} = {}) {
    return render(<ProductDetails />);
  }

  it("should render page title", () => {
    const { getAllByText } = mount({});
    expect(getAllByText("Nome do serviço")).toHaveLength(2);
  });

  it("should render section details of product", () => {
    const { getByText } = mount({});
    expect(getByText("Documentos necessários:")).toBeInTheDocument();
  });

  it("should scrolls to top in first render", () => {
    mount();
    expect(window.scrollTo).toBeCalledTimes(1);
  });
});
