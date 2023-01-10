import React from "react";
import { render, screen } from "test-utils";
import Error404 from "./error404";

describe("About Router", () => {
  it("should render a title and description", () => {
    render(<Error404 />);
    expect(screen.getByText("Página não encontrada")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Ops! Desculpe, mas a página acessada não existe. Verifique o caminho digitado."
      )
    ).toBeInTheDocument();
  });

  it("should render image of not found", () => {
    render(<Error404 />);
    expect(
      screen.getByRole("img", {
        name: /mulher sentada olhando um celular e atrás tem uma lupa e a imagem de um planeta com anéis/i,
      })
    ).toBeInTheDocument();
  });
});
