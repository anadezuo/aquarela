import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "styles/ThemeProvider";
import { MemoryRouter as Router } from "react-router-dom";

const TestProvider = ({ children }) => (
  <Router>
    <ThemeProvider>{children}</ThemeProvider>
  </Router>
);

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
