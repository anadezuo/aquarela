import React from "react";
import { render, waitFor } from "test-utils";
import BreadCrumb from "./BreadCrumb";

describe("Bread Crump Component", () => {
  function mount({ items } = {}) {
    return render(<BreadCrumb items={items} />);
  }

  it("should render a list of item", () => {
    const items = [{ label: "Label 1" }, { label: "Label 2" }];
    const { getByText } = mount({ items });

    expect(getByText(items[0].label)).toBeInTheDocument();
    expect(getByText(items[1].label)).toBeInTheDocument();
  });

  it("should render a item with link", async () => {
    const items = [{ label: "Label 1", link: "/" }, { label: "Label 2" }];
    const { getByText } = mount({ items });

    await waitFor(() => {
      expect(getByText(items[0].label)).toHaveAttribute("href", "/");
      expect(getByText(items[1].label)).not.toHaveAttribute("href", "");
    });
  });
});
