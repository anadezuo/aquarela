export const BreakpointsSize = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 12_000,
};

export const breakAt = (size) => `@media (min-width: ${size}px)`;
