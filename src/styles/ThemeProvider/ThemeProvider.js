import React from "react";
import { ThemeProvider as StyleProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121",
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121",
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyleProvider theme={theme}>{children}</StyleProvider>
);

export default ThemeProvider;
