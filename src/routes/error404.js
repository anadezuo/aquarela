import React from "react";
import Error from "components/pages/Error";
import SvgNotFound from "draws/NotFound";

const Error404 = () => {
  return (
    <Error
      image={<SvgNotFound />}
      title="Página não encontrada"
      description="Ops! Desculpe, mas a página acessada não existe. Verifique o caminho digitado."
    />
  );
};

export default Error404;
