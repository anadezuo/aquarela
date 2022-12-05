import React from "react";
import { ThemeProvider as StyleProvider } from "styled-components";

export const ThemeNames = {
  LIGHT: "light",
  OCEAN: "ocean",
};

const light = {
  colors: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121",
      background: "#fff",
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121",
    },
  },
};

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#2196f3",
        dark: "#1769aa",
        light: "#4dabf5",
        text: "#fff",
        background: "#fff",
      },
    },
  },
};

const ThemeProvider = ({ theme, children }) => (
  <StyleProvider theme={allThemes[theme]}>{children}</StyleProvider>
);

ThemeProvider.defaultProps = {
  theme: "light",
};

export default ThemeProvider;
