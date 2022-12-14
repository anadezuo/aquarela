import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Container from "components/atoms/Container";
import { BreakpointsSize, breakAt } from "styles/Breakpoints";

const Content = styled.div`
  padding: 40px 0;
  ${({ inverse, theme }) =>
    inverse &&
    css`
      background-color: ${theme.colors.background.inverse};
    `}

  ${breakAt(BreakpointsSize.md)} {
    padding: 80px 0;
  }

  h2 {
    margin-top: 0;
  }
`;

const Section = ({ inverse, children }) => (
  <Content inverse={inverse}>
    <Container>{children}</Container>
  </Content>
);

Section.propTypes = {
  children: PropTypes.node,
  inverse: PropTypes.bool,
};

Section.defaultProps = {
  children: undefined,
  inverse: false,
};

export default Section;
