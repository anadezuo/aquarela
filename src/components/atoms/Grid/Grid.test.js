import React from "react";
import { render } from "test-utils";
import Grid from "./Grid";

describe("Grid", () => {
  function mount({ sm, md, lg, xl } = {}) {
    return render(<Grid sm={sm} md={md} lg={lg} xl={xl} />);
  }

  it("should a grid", () => {
    const { asFragment } = mount();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should optionally render with size parameter", () => {
    const { asFragment } = mount({ sm: 2, md: 3, lg: 4, xl: 5 });
    expect(asFragment()).toMatchSnapshot();
  });

  it("should optionally render with sm and md size parameter", () => {
    const { asFragment } = mount({ sm: 2, lg: 4 });
    expect(asFragment()).toMatchSnapshot();
  });
});
