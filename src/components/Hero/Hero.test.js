import { render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  async function mount({ image, children }) {
    return render(<Hero image={image} children={children} />);
  }

  it("should accept a children", async () => {
    const children = "text children";
    const { getByText } = await mount({ children });
    expect(getByText(children)).toBeInTheDocument();
  });

  it("should render image background", async () => {
    const image = "http://stories/assets/bg-painting.jpg";
    const { getByTestId } = await mount({ image });
    expect(getByTestId("hero")).toHaveStyleRule({
      backgroundImage: image,
    });
  });
});
