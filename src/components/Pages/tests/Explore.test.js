import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Explore } from "../";

beforeEach(cleanup);

describe("<Explore />", () => {
  it("should render without crashing", () => {
    render(<Explore />);
  });
});
