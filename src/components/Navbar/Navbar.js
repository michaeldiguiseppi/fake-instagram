import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faCommentDots,
  faCompass,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <a data-testid="header-button-link-logo" href="/home">
        <img
          src={"/fake_instagram_white_no_bg.png"}
          alt="logo-img"
          height={50}
          width={150}
        />
      </a>
      <input
        className="header-search-field"
        type="text"
        data-testid="header-search-field"
        placeholder="Search"
      />
      <div className="header-button-container">
        <div data-testid="header-button">
          <a
            className="header-button-link"
            href="/home"
            data-testid="header-button-link-home"
          >
            <FontAwesomeIcon
              className="header-button-icon fa-2x"
              icon={faHome}
            />
          </a>
        </div>
        <div data-testid="header-button">
          <a
            className="header-button-link"
            href="/chat"
            data-testid="header-button-link-chat"
          >
            <FontAwesomeIcon
              className="header-button-icon fa-2x"
              icon={faCommentDots}
            />
          </a>
        </div>
        <div data-testid="header-button">
          <a
            className="header-button-link"
            href="/explore"
            data-testid="header-button-link-explore"
          >
            <FontAwesomeIcon
              className="header-button-icon fa-2x"
              icon={faCompass}
            />
          </a>
        </div>
        <div data-testid="header-button">
          <a
            className="header-button-link"
            href="/likes"
            data-testid="header-button-link-likes"
          >
            <FontAwesomeIcon
              className="header-button-icon fa-2x"
              icon={faHeart}
            />
          </a>
        </div>
        <div
          data-testid="header-button"
          className="header-button-profile-link-container"
        >
          <a
            className="header-button-link"
            href="/profile"
            data-testid="header-button-link-profile"
          >
            <img
              src="https://instagram.fapa1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/88310951_2944165445663961_6702094065074176000_n.jpg?tp=1&_nc_ht=instagram.fapa1-2.fna.fbcdn.net&_nc_ohc=HR4CQgiMxIgAX9j43rc&edm=ABfd0MgAAAAA&ccb=7-4&oh=016d04d106579d5741a736e133019510&oe=609FB6E5&_nc_sid=7bff83"
              className="link-profile-photo"
              alt="link-profile-photo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
