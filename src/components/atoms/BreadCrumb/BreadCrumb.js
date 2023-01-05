import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  padding: 16px 0;
`;

const Item = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.contrastText};

  ${({ haveLink }) =>
    haveLink &&
    css`
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.primary.main};
      }
    `}

  &:not(:first-child) {
    &::before {
      content: ">";
      color: ${({ theme }) => theme.colors.primary.main};
      padding: 0 16px;
    }
  }
`;

const BreadCrumb = ({ items }) => {
  return (
    <Root>
      {items.map((item) => (
        <Item
          key={item.label}
          as={item.link && Link}
          to={item.link}
          haveLink={!!item.link}
        >
          {item.label}
        </Item>
      ))}
    </Root>
  );
};

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

BreadCrumb.defaultProps = {
  items: [],
};

export default BreadCrumb;
