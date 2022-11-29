import { fireEvent } from "@testing-library/react";
import { render } from "test-utils";
import BUTTON_COLORS from "../../constants/ButtonColors";
import BUTTON_VARIANTS from "../../constants/ButtonVariants";
import Button from "./Button";

describe("Button", () => {
  function mount({ children, color, variant, disabled, onClick }) {
    return render(
      <Button
        children={children}
        color={color}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
      />
    );
  }

  function getButton(getByRole) {
    return getByRole("button");
  }

  it("should render a text", () => {
    const children = "My button";
    const { getByText } = mount({ children });
    expect(getByText(children)).toBeInTheDocument();
  });

  it("should render disabled when value is given", () => {
    const { getByRole } = mount({ disabled: true });
    const button = getButton(getByRole);
    expect(button).toHaveAttribute("disabled", "");
  });

  it("should execute listener callback on click", () => {
    const onClick = jest.fn();
    const { getByRole } = mount({ onClick });
    fireEvent.click(getByRole("button"));
    expect(onClick).toBeCalled();
  });

  it.each(Object.values(BUTTON_COLORS).map((item) => [item]))(
    "should show %s color when color is provided",
    (color) => {
      const { asFragment } = mount({ color });
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each(Object.values(BUTTON_VARIANTS).map((item) => [item]))(
    "should optionally render an %s button",
    (variant) => {
      const { asFragment } = mount({ variant });
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it("should optionally render an outlined button with color primary", () => {
    const { asFragment } = mount({
      color: BUTTON_COLORS.PRIMARY,
      variant: BUTTON_VARIANTS.OUTLINED,
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("should optionally render an link button with color primary", () => {
    const { asFragment } = mount({
      color: BUTTON_COLORS.PRIMARY,
      variant: BUTTON_VARIANTS.LINK,
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
