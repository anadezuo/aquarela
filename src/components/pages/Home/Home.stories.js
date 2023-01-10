import React from "react";
import { buildProducts } from "builders/products";
import Home from "./Home";

export default {
  title: "Components/Pages/Home",
  component: Home,
};

export const usage = () => <Home products={buildProducts(8)} />;
