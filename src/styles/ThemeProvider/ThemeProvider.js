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
      contrastText: "#fff",
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121",
    },
    background: {
      main: "#fff",
      inverse: "#f7f7f7",
      contrast: "#2a2a2a",
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
        contrastText: "#f7f7f7",
      },
      background: {
        main: "#2a2a2a",
        inverse: "#333",
        contrast: "#000",
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
