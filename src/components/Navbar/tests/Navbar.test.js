import React from "react";
import { render, cleanup } from "@testing-library/react";
import Navbar from "../Navbar";

beforeEach(cleanup);

describe("<Navbar />", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
  });

  it("Has a logo that links to the home page", () => {
    const { getByAltText } = render(<Navbar />);
    getByAltText(/logo-img/);
  });

  it("the logo should link to the home page", () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId(/header-button-link-logo/)).toHaveAttribute(
      "href",
      "/home"
    );
  });

  it("has a text input search box", () => {
    const { getByTestId } = render(<Navbar />);
    getByTestId(/header-search-field/);
  });

  it("should have search placeholder text", () => {
    const { getByPlaceholderText } = render(<Navbar />);
    getByPlaceholderText(/search/i);
  });

  it("should have 5 buttons", () => {
    const { getAllByTestId } = render(<Navbar />);
    const buttons = getAllByTestId(/^header-button$/);
    expect(buttons).toHaveLength(5);
  });

  it("the home button should have a link to home", () => {
    const { getByTestId } = render(<Navbar />);
    const linkElement = getByTestId(/header-button-link-home/);
    expect(linkElement).toHaveAttribute("href", "/home");
  });

  it("the chat button should have a link to chat", () => {
    const { getByTestId } = render(<Navbar />);
    const linkElement = getByTestId(/header-button-link-chat/);
    expect(linkElement).toHaveAttribute("href", "/chat");
  });

  it("the explore button should have a link to explore", () => {
    const { getByTestId } = render(<Navbar />);
    const linkElement = getByTestId(/header-button-link-explore/);
    expect(linkElement).toHaveAttribute("href", "/explore");
  });

  it("the like button should have a link to likes", () => {
    const { getByTestId } = render(<Navbar />);
    const linkElement = getByTestId(/header-button-link-likes/);
    expect(linkElement).toHaveAttribute("href", "/likes");
  });

  it("the profile button should have an image in it", () => {
    const { getByAltText } = render(<Navbar />);
    getByAltText(/link-profile-photo/);
  });

  it("the profile image should have a link to profile", () => {
    const { getByTestId } = render(<Navbar />);
    const linkElement = getByTestId(/header-button-link-profile/);
    expect(linkElement).toHaveAttribute("href", "/profile");
  });
});
