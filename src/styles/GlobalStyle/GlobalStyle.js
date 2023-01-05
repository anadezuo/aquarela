import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import { BreakpointsSize, breakAt } from "styles/Breakpoints/Breakpoints";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 100%;
    color: ${({ theme }) => theme.colors.primary.text};
    box-sizing: border-box;
    
  }

  *, *::before, * ::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background.main};
  }

  a, button {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    font-weight: 300;
    letter-spacing: 2px;


   strong {
     color: ${({ theme }) => theme.colors.primary.main};
     font-weight: 700;
    }
  }

  h1 {
    font-size: 2.5rem;

    ${breakAt(BreakpointsSize.lg)} {
      font-size: 3.75rem;
    }
  }

  h2 {
    font-size: 2rem;
    ${breakAt(BreakpointsSize.lg)} {
      font-size: 3.125rem;
    }
  }

  h3 {
    font-size: 1.9rem;
    ${breakAt(BreakpointsSize.lg)} {
      font-size: 2.5rem;
    }
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 600;
    ${breakAt(BreakpointsSize.lg)} {
      font-size: 2.125rem;
    }
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 30;
    ${breakAt(BreakpointsSize.lg)} {
      font-size: 1.5rem;
    }
  }

  h6 {
    font-size: 1.1rem;
    font-weight: 600;
    ${breakAt(BreakpointsSize.lg)} {
      font-size: 1.25rem;
    }
  }
`;

const GlobalStyleComposed = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default GlobalStyleComposed;
