import { BreakpointsSize, breakAt } from "./Breakpoints";

describe("Breakpoint Service", () => {
  it.each([
    [BreakpointsSize.sm],
    [BreakpointsSize.md],
    [BreakpointsSize.lg],
    [BreakpointsSize.xl],
  ])("should return the width as given value %ipx", (size) => {
    expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
  });
});
