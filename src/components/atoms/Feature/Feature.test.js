import React from "react";
import { render } from "test-utils";
import Feature from "./Feature";

describe("Feature Component", () => {
  function mount({ title, children } = {}) {
    return render(<Feature title={title} children={children} />);
  }

  it("should render a title", () => {
    const title = "My title";
    const { getByText } = mount({ title });
    expect(getByText(title)).toBeInTheDocument();
  });

  it("should render a children", () => {
    const children = "My children";
    const { getByText } = mount({ children });
    expect(getByText(children)).toBeInTheDocument();
  });
});
