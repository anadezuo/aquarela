import React from "react";
import { render } from "test-utils";
import Error from "./Error";
import SvgNotFound from "draws/NotFound";

describe("Error Page", () => {
  function mount({ image, title, description } = {}) {
    return render(
      <Error image={image} title={title} description={description} />
    );
  }

  it("should render title and description", () => {
    const title = "My Title";
    const description = "My Description";
    const { getByText } = mount({ title, description });

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  it("should render a image", () => {
    const image = <SvgNotFound />;
    const { getByRole } = mount({ image });

    expect(
      getByRole("img", {
        name: /mulher sentada olhando um celular e atrás tem uma lupa e a imagem de um planeta com anéis/i,
      })
    ).toBeInTheDocument();
  });
});
