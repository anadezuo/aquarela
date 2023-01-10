import React from "react";
import { useParams } from "react-router-dom";
import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";
import ProductDetailsPage from "components/pages/Product/ProductDetails";
import Error from "components/pages/Error";
import SvgArt from "draws/Art";

const ProductDetails = () => {
  useScrollToTop();

  const { slang } = useParams();
  const product = useProduct({ slang });

  if (!product) {
    return (
      <Error
        image={<SvgArt />}
        title="Serviço não encontrado"
        description="Serviço não encontrado ou não disponível"
      />
    );
  }

  return <ProductDetailsPage product={product} />;
};

export default ProductDetails;
