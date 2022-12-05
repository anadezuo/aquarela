import React from "react";
import PropTypes from "prop-types";
import Container from "components/atoms/Container";
import styled from "styled-components";

const Content = styled.div`
  margin: 40px 0;
`;
const Section = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

Section.propTypes = {
  children: PropTypes.node,
};

Section.defaultProps = {
  children: undefined,
};

export default Section;
