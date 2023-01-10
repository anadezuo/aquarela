import React from "react";
import { buildProducts } from "builders/products";
import ProductGrid from "./ProductGrid";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => {
  return <ProductGrid products={buildProducts(5)} />;
};

export const WithoutAllProductButton = () => {
  return <ProductGrid products={buildProducts(3)} />;
};
