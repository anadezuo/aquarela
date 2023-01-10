import React from "react";
import { render } from "test-utils";
import Error404 from "./error404";

describe("About Router", () => {
  it("should render a title and description", () => {
    const { getByText } = render(<Error404 />);
    expect(getByText("Página não encontrada")).toBeInTheDocument();
    expect(
      getByText(
        "Ops! Desculpe, mas a página acessada não existe. Verifique o caminho digitado."
      )
    ).toBeInTheDocument();
  });

  it("should render image of not found", () => {
    const { getByRole } = render(<Error404 />);
    expect(
      getByRole("img", {
        name: /mulher sentada olhando um celular e atrás tem uma lupa e a imagem de um planeta com anéis/i,
      })
    ).toBeInTheDocument();
  });
});
