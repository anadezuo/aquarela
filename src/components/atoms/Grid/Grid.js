import styled, { css } from "styled-components";
import propTypes from "prop-types";
import { breakAt, BreakpointsSize } from "styles/Breakpoints";

const breakColumnAt = (size) => (props) =>
  props[size] &&
  css`
    ${breakAt(BreakpointsSize[size])} {
      grid-template-columns: repeat(${(props) => props[size]}, 1fr);
    }
  `;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;

  ${breakColumnAt("sm")}
  ${breakColumnAt("md")}
  ${breakColumnAt("lg")}
  ${breakColumnAt("xl")}
`;

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

Grid.propTypes = {
  sm: propTypes.number,
  md: propTypes.number,
  lg: propTypes.number,
  xl: propTypes.number,
};

export default Grid;
