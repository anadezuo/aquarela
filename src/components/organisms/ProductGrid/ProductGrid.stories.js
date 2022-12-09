import React from "react";
import ProductGrid from "./ProductGrid";
import BgWaterColorKit from "assets/bg-watercolor-kit.jpeg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

function buildProducts(length) {
  return new Array(length).fill({}).map((_, index) => ({
    id: index,
    image: BgWaterColorKit,
    title: `Título ${index + 1}`,
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }));
}

export const usage = () => {
  return <ProductGrid products={buildProducts(5)} />;
};

export const WithoutAllProductButton = () => {
  return <ProductGrid products={buildProducts(3)} />;
};
