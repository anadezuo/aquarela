import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
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
  display: flex;
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover;
  height: 200px;

  > h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 8px 16px;
    margin: 0;
    color: #fff;
    align-self: flex-end;
    flex: 1;
  }

  svg + h1,
  svg + h2,
  svg + h3,
  svg + h4,
  svg + h5,
  svg + h6,
  svg + p {
    position: absolute;
  }

  > svg {
    height: auto;
    width: auto;
    width: 100%;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const CardMedia = ({ image, svg, children }) => (
  <Media image={image} svg={svg} children={children} />
);

CardMedia.propTypes = {
  image: PropTypes.string,
  svg: PropTypes.node,
  children: PropTypes.node,
};

CardMedia.defaultProps = {
  image: undefined,
  svg: undefined,
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
