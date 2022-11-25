import { render } from "@testing-library/react";
import ThemeProvider from "styles/ThemeProvider";
import BUTTON_COLORS from "../../constants/ButtonColors";
import Button from "./Button";

describe("Button", () => {
  function mount({ children, color, disabled }) {
    return render(
      <ThemeProvider>
        <Button children={children} color={color} disabled={disabled} />
      </ThemeProvider>
    );
  }

  function getButton(getByRole, textButton) {
    return getByRole("button", { name: textButton });
  }

  it("should render a text", () => {
    const children = "My button";
    const { getByText } = mount({ children });
    expect(getByText(children)).toBeInTheDocument();
  });

  it("should render disabled when value is given", () => {
    const text = "My Button";
    const { getByRole } = mount({ children: text, disabled: true });
    const button = getButton(getByRole, text);
    expect(button).toHaveAttribute("disabled", "");
  });

  it("should show default color when color is provided", () => {
    const text = "My Button";
    const { getByRole } = mount({
      children: text,
      color: BUTTON_COLORS.DEFAULT,
    });
    const button = getButton(getByRole, text);
    expect(button).toHaveStyle("background-color: #e0e0e0;");
  });

  it("should show primary color when color is provided", () => {
    const text = "My Button";
    const { getByRole } = mount({
      children: text,
      color: BUTTON_COLORS.PRIMARY,
    });
    const button = getButton(getByRole, text);
    expect(button).toHaveStyle("background-color: #ffc107;");
  });

  it("should show danger color when color is provided", () => {
    const text = "My Button";
    const { getByRole } = mount({
      children: text,
      color: BUTTON_COLORS.DANGER,
    });
    const button = getButton(getByRole, text);
    expect(button).toHaveStyle("background-color: #ff3d00;");
  });
});
