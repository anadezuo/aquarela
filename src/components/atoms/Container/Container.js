import styled from "styled-components";
import PropTypes from "prop-types";
import { breakAt, BreakpointsSize } from "styles/Breakpoints";

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointsSize.sm)} {
    padding: 16px;
  }

  ${breakAt(BreakpointsSize.xl)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: undefined,
};

export default Container;
