import { buildProduct } from "builders/products";
import React from "react";
import ProductDetails from "./ProductDetails";

export default {
  title: "Components/Pages/ProductDetails",
  component: ProductDetails,
};

export const usage = () => <ProductDetails product={buildProduct()} />;
