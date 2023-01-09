import React from "react";
import { useParams } from "react-router-dom";
import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";
import ProductDetailsPage from "components/pages/Product/ProductDetails";

const ProductDetails = () => {
  const { slang } = useParams();
  const product = useProduct({ slang });

  useScrollToTop();
  return <ProductDetailsPage product={product} />;
};

export default ProductDetails;
