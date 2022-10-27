import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { breakAt, BreakpointSize } from "../Breakpoints/Breakpoints";

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

const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 16px;
  }

  ${breakAt(BreakpointSize.xl)} {
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
    }
  }
`;

const Hero = ({ title, children, image }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  /**
   * Título exemplo da seção
   */
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node, // se quiser apenas um elemento, deve ser usuada a opção .element
};

Hero.defaultProps = {
  title: "Meu título",
  children: <p> Paragráfo </p>,
};

export default Hero;
