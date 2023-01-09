import React from "react";
import { useScrollToTop } from "hooks/scroll";
import HomePage from "components/pages/Home";
import { useProducts } from "hooks/products";

const Home = () => {
  const products = useProducts();
  useScrollToTop();

  return <HomePage products={products} />;
};

export default Home;
