import { render } from "@testing-library/react";
import BgPaintingImage from "../../stories/assets/bg-painting.jpg";
import Hero from "./Hero";

describe("Hero", () => {
  async function mount({ title, children, image }) {
    return render(<Hero title={title} children={children} image={image} />);
  }

  it("should contain a title", async () => {
    const title = "My Title";
    const { getByText } = await mount({ title });
    expect(getByText(title)).toBeInTheDocument();
  });

  it("should accept a children", async () => {
    const children = "text children";
    const { getByText } = await mount({ children });
    expect(getByText(children)).toBeInTheDocument();
  });

  it.skip("should contain a image", async () => {
    const image = BgPaintingImage;
    const { getByRole } = await mount({ image });

    const logo = getByRole("img");
    expect(logo).toHaveAttribute("src", "../../stories/assets/bg-painting.jpg");
  });
});
