import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const Root = styled.div`
  border: 1px solid #e0e0e0;
  border-left: 5px solid ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.background.main};

  ${({ isOpen }) =>
    isOpen &&
    css`
      margin: 16px 0;
    `}

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;

  & h6 {
    margin: 0;
  }

  & svg {
    font-size: 1.25rem;
  }
`;
const Body = styled.div`
  padding: 0 16px 16px;
`;

const Accordion = ({ title, open, children, onChange }) => {
  const [isOpen, setVisibility] = useState(false);
  const toggleVisibility = () => {
    if (open === undefined) {
      setVisibility(!isOpen);
    }
    onChange?.();
  };

  useEffect(() => {
    if (open !== undefined) setVisibility(open);
  }, [open]);

  return (
    <Root isOpen={isOpen}>
      <Head role="button" onClick={toggleVisibility}>
        <h6>{title}</h6>
        {isOpen ? (
          <MdExpandLess id="expandLessIcon" />
        ) : (
          <MdExpandMore id="expandMoreIcon" />
        )}
      </Head>
      {isOpen && <Body>{children}</Body>}
    </Root>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
};

Accordion.defaultProps = {
  title: undefined,
  children: undefined,
  isOpen: undefined,
  onChange: undefined,
};

export default Accordion;
