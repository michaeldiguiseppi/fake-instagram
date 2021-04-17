import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Likes } from "../";

beforeEach(cleanup);

describe("<Likes />", () => {
  it("should render without crashing", () => {
    render(<Likes />);
  });
});
