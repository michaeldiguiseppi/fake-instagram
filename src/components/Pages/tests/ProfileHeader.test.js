import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ProfileHeader from "../ProfileHeader";

beforeEach(cleanup);

describe("<ProfileHeader />", () => {
  it("should render without crashing", () => {
    render(<ProfileHeader />);
  });

  it("should render a profile photo", () => {
    const { getByAltText } = render(<ProfileHeader />);
    getByAltText(/profile-img/);
  });

  it("should render a username", () => {
    const { getByText } = render(<ProfileHeader />);
    getByText(/magicmikedee/i);
  });

  it("should show an edit profile button", () => {
    const { getByText } = render(<ProfileHeader />);
    getByText(/edit profile/i);
  });

  it("should show a settings button", () => {
    const { getByTestId } = render(<ProfileHeader />);
    getByTestId(/profile-header-settings-button/);
  });

  it("should have a section for a users post count", () => {
    const { getByText } = render(<ProfileHeader />);
    getByText(/posts/i);
  });

  it("should show the correct number of posts", () => {
    const { getByText } = render(<ProfileHeader posts={3} />);
    getByText(/3 posts/i);
  });

  it("should have a section for a users follower count", () => {
    const { getByText } = render(<ProfileHeader />);
    getByText(/followers/i);
  });

  it("should show the correct number of followers", () => {
    const { getByText } = render(<ProfileHeader followers={10} />);
    getByText(/10 followers/i);
  });

  it("should have a section for number of accounts followed", () => {
    const { getByText } = render(<ProfileHeader />);
    getByText(/following/i);
  });

  it("should show the correct number of following", () => {
    const { getByText } = render(<ProfileHeader following={25} />);
    getByText(/25 following/i);
  });

  it("should show a description", () => {
    const { getByTestId } = render(<ProfileHeader />);
    getByTestId(/profile-header-description/);
  });
});
