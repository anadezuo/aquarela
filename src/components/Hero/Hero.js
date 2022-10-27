import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { breakAt, BreakpointSize } from "../Breakpoints/Breakpoints";

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

const Title = styled.h1`
  position: relative;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(255, 2555, 255, 0.2);
  font-size: 2.5rem;

  &::after {
    content: "";
    letter-spacing: 2px;
    position: absolute;
    left: 0;
    bottom: 3px;
    background-color: ${colorPrimary};
    height: 5px;
    width: 70px;
  }

  strong {
    color: ${colorPrimary};
    font-weight: 700;
  }
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
      color: ${colorPrimary};
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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  image: PropTypes.string,
  children: PropTypes.node, // se quiser apenas um elemento, deve ser usuada a opção .element
};

Hero.defaultProps = {
  title: "Meu título",
  children: <p> Paragráfo </p>,
};

export default Hero;
