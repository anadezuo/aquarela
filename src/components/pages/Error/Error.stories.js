import React from "react";
import Error from "./Error";
import SvgNotFound from "draws/NotFound";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

export const usage = () => (
  <Error
    image={<SvgNotFound />}
    title="Aconteceu alguma coisa"
    description="Ops! Desculpe, mas aconteceu algum erro ao acessar essa página."
  />
);
