import React from "react";
import { render, userEvent, waitFor } from "test-utils";
import Accordion from "../Accordion";
import AccordionGroup from "./AccordionGroup";

describe("According Group", () => {
  function mount({ children } = {}) {
    return render(<AccordionGroup children={children} />);
  }

  function buildAccordionGroup(length, title, childrenText) {
    return Array(length)
      .fill()
      .map((_, index) => (
        <Accordion key={index} title={title + index}>
          {childrenText + index}
        </Accordion>
      ));
  }

  it("should render one child", () => {
    const title = "Accordion title";
    const children = <Accordion title={title} />;
    const { getByText } = mount({ children });
    expect(getByText(title)).toBeInTheDocument();
  });

  it("should render children closed by default", () => {
    const title = "Accordion title ";
    const childrenText = "Accordion children title";
    const length = 3;
    let i = 0;
    const { getByText, queryByText } = mount({
      children: buildAccordionGroup(length, title, childrenText),
    });
    while (i < length) {
      expect(getByText(title + i)).toBeInTheDocument();
      expect(queryByText(childrenText + i)).not.toBeInTheDocument();
      i += 1;
    }
  });

  it("should hide content options after click on title of one option", async () => {
    const title = "Accordion title ";
    const childrenText = "Accordion children text";
    const { getByText, queryByText } = mount({
      children: buildAccordionGroup(3, title, childrenText),
    });

    userEvent.click(getByText(title + 1));
    await waitFor(() => {
      expect(queryByText(childrenText + 0)).not.toBeInTheDocument();
      expect(getByText(childrenText + 1)).toBeInTheDocument();
      expect(queryByText(childrenText + 2)).not.toBeInTheDocument();
    });

    userEvent.click(getByText(title + 2));
    await waitFor(() => {
      expect(queryByText(childrenText + 0)).not.toBeInTheDocument();
      expect(queryByText(childrenText + 1)).not.toBeInTheDocument();
      expect(getByText(childrenText + 2)).toBeInTheDocument();
    });
  });

  it("should hide content option after click on title of option open", async () => {
    const title = "Accordion title ";
    const childrenText = "Accordion children text";
    const { getByText, queryByText } = mount({
      children: buildAccordionGroup(3, title, childrenText),
    });
    userEvent.click(getByText(title + 1));
    userEvent.click(getByText(title + 1));
    await waitFor(() => {
      expect(queryByText(childrenText + 1)).not.toBeInTheDocument();
    });
  });
});
