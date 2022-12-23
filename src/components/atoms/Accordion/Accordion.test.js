import React from "react";
import { render, userEvent, waitFor } from "test-utils";
import Accordion from "./Accordion";

const TITLE = "My Title";

describe("Accordion component", () => {
  function mount({ title, open, children, onChange } = {}) {
    return render(
      <Accordion
        title={title}
        open={open}
        children={children}
        onChange={onChange}
      />
    );
  }

  it("should render with a title", () => {
    const { getByText } = mount({ title: TITLE });
    expect(getByText(TITLE)).toBeInTheDocument();
  });

  it("should hide content after click on expand less button", async () => {
    const childrenText = "My children";
    const { queryByText, container, getByText } = mount({
      children: <p>{childrenText}</p>,
    });
    expect(queryByText(childrenText)).not.toBeInTheDocument();
    const iconExpandMore = container.querySelector("#expandMoreIcon");
    userEvent.click(iconExpandMore);
    await waitFor(() => {
      expect(getByText(childrenText)).toBeInTheDocument();
    });
    const iconExpandLess = container.querySelector("#expandLessIcon");
    userEvent.click(iconExpandLess);
    await waitFor(() => {
      expect(queryByText(childrenText)).not.toBeInTheDocument();
    });
  });

  it("should execute onChange listener on click", async () => {
    const onChange = jest.fn();
    const { getByText } = mount({ title: TITLE, onChange });
    userEvent.click(getByText(TITLE));
    await waitFor(() => expect(onChange).toBeCalledTimes(1));
  });
});
