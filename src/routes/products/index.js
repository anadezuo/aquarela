import React from "react";
import { useScrollToTop } from "hooks/scroll";
import ProductDetailsPage from "components/pages/Product/ProductDetails";

const ProductDetails = () => {
  useScrollToTop();
  return <ProductDetailsPage />;
};

export default ProductDetails;
