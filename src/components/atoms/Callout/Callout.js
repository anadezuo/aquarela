import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Button";
import BUTTON_COLORS from "constants/ButtonColors";
import BUTTON_VARIANTS from "constants/ButtonVariants";
import { breakAt, BreakpointsSize } from "styles/Breakpoints";

const Root = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.main};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 3px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  padding: 16px;
`;

const Content = styled.div`
  flex: 1;
`;

const Body = styled.div`
  h6,
  p {
    margin: 0 0 8px;
  }
`;

const Actions = styled.div`
  padding: 8px 0;
`;

const Image = styled.div`
  width: 30%;
  display: none;

  ${breakAt(BreakpointsSize.md)} {
    display: flex;
  }

  svg {
    height: 100%;
    max-height: 200px;
    width: 100%;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const Callout = ({ title, description, svg }) => {
  return (
    <Root>
      <Content>
        <Body>
          <h6>{title}</h6>
          <p>{description}</p>
        </Body>
        <Actions>
          <Button
            color={BUTTON_COLORS.PRIMARY}
            variant={BUTTON_VARIANTS.DEFAULT}
          >
            Texto Botão
          </Button>
        </Actions>
      </Content>
      <Image> {svg}</Image>
    </Root>
  );
};

Callout.propTypes = {
  children: PropTypes.node,
};

Callout.defaultProps = {
  children: undefined,
};

export default Callout;
