import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import BUTTON_COLORS from "constants/ButtonColors";
import BUTTON_VARIANTS from "constants/ButtonVariants";

const getMainColor = ({ theme, color }) => {
  return {
    [BUTTON_COLORS.DEFAULT]: "#e0e0e0",
    [BUTTON_COLORS.PRIMARY]: theme.colors.primary.main,
    [BUTTON_COLORS.DANGER]: theme.colors.danger.main,
  }[color];
};

const getDarkColor = ({ theme, color }) => {
  return {
    [BUTTON_COLORS.DEFAULT]: "#5a6268",
    [BUTTON_COLORS.PRIMARY]: theme.colors.primary.dark,
    [BUTTON_COLORS.DANGER]: theme.colors.danger.dark,
  }[color];
};

const getTextColor = ({ theme, color }) => {
  return {
    [BUTTON_COLORS.DEFAULT]: "#212121",
    [BUTTON_COLORS.PRIMARY]: theme.colors.primary.text,
    [BUTTON_COLORS.DANGER]: theme.colors.danger.text,
  }[color];
};

const getOutlinedText = (props) => {
  if (props.color === BUTTON_COLORS.DEFAULT) {
    return "#212121";
  }

  return getMainColor(props);
};

const getLinkText = (props) => {
  if (props.color === BUTTON_COLORS.DEFAULT) {
    return "#757575";
  }

  return getMainColor(props);
};

const ButtonBase = styled.button`
  font-size: 1 rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 8px 30px;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getTextColor};
  display: inline-block;
  text-decoration: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${getDarkColor};
    border: 2px solid ${getDarkColor};
  }
`;

const ButtonOutlined = styled(ButtonBase)`
  background-color: transparent;
  color: ${getOutlinedText};

  &:hover:not(:disabled) {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonLink = styled(ButtonBase)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;
  &:hover:not(:disabled) {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

const Button = (props) => {
  switch (props.variant) {
    case BUTTON_VARIANTS.OUTLINED:
      return <ButtonOutlined {...props} />;
    case BUTTON_VARIANTS.LINK:
      return <ButtonLink {...props} />;
    default:
      return <ButtonBase {...props} />;
  }
};

Button.propTypes = {
  type: propTypes.string,
  children: propTypes.node,
  color: propTypes.oneOf(Object.values(BUTTON_COLORS)),
  variant: propTypes.oneOf(Object.values(BUTTON_VARIANTS)),
};

Button.defaultProps = {
  type: "button",
  children: undefined,
  color: BUTTON_COLORS.DEFAULT,
  variant: BUTTON_VARIANTS.DEFAULT,
};

export default Button;
