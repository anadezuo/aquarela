import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

const Body = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;

  h6 {
    margin-top: 0;
  }
`;

const Media = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover;
  height: 200px;
`;

export const CardMedia = ({ image }) => <Media image={image} />;

CardMedia.propTypes = {
  children: PropTypes.node,
};

CardMedia.defaultProps = {
  children: undefined,
};

export const CardBody = ({ children }) => <Body children={children} />;

CardBody.propTypes = {
  image: PropTypes.string,
};

CardBody.defaultProps = {
  image: "",
};

const Card = ({ children }) => {
  return <Root>{children}</Root>;
};

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: undefined,
};

export default Card;
