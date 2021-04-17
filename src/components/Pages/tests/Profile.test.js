import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Profile } from "../";

beforeEach(cleanup);

describe("<Profile />", () => {
  it("should render without crashing", () => {
    render(<Profile />);
  });
});
