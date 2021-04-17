import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Home } from "../";
beforeEach(cleanup);

describe("<Home />", () => {
  it("should render without crashing", () => {
    render(<Home />);
  });
});
