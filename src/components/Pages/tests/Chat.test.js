import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Chat } from "../";

beforeEach(cleanup);

describe("<Chat />", () => {
  it("should render without crashing", () => {
    render(<Chat />);
  });
});
