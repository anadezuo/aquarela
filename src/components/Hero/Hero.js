import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { breakAt, BreakpointsSize } from "components/Breakpoints/Breakpoints";
const colorPrimary = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
  `}
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointsSize.sm)} {
    padding: 16px;
  }

  ${breakAt(BreakpointsSize.xl)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${colorPrimary};
    }
  }
`;

const Hero = ({ children, image }) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  /**
   * Image exemplo da seção
   */
  image: PropTypes.string,
  children: PropTypes.node, // se quiser apenas um elemento, deve ser usuada a opção .element
};

Hero.defaultProps = {
  children: <p> Paragráfo </p>,
};

export default Hero;
