import { BreakpointSize, breakAt } from "./Breakpoints";

describe("Breakpoint Service", () => {
  it("should return the width as given value", () => {
    expect(breakAt(BreakpointSize.sm)).toEqual("@media (min-width: 576px)");
  });
});
