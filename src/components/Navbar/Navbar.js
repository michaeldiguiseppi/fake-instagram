import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faCommentDots,
  faCompass,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Chat, Explore, Likes, Profile } from "../Pages";

const Navbar = () => {
  return (
    <Router>
      <div className="header">
        <Link data-testid="header-button-link-logo" to="/">
          <img
            src={"/fake_instagram_white_no_bg.png"}
            alt="logo-img"
            height={50}
            width={150}
          />
        </Link>
        <input
          className="header-search-field"
          type="text"
          data-testid="header-search-field"
          placeholder="Search"
        />
        <div className="header-button-container">
          <div data-testid="header-button">
            <Link
              className="header-button-link"
              to="/"
              data-testid="header-button-link-home"
            >
              <FontAwesomeIcon
                className="header-button-icon fa-2x"
                icon={faHome}
              />
            </Link>
          </div>
          <div data-testid="header-button">
            <Link
              className="header-button-link"
              to="/chat"
              data-testid="header-button-link-chat"
            >
              <FontAwesomeIcon
                className="header-button-icon fa-2x"
                icon={faCommentDots}
              />
            </Link>
          </div>
          <div data-testid="header-button">
            <Link
              className="header-button-link"
              to="/explore"
              data-testid="header-button-link-explore"
            >
              <FontAwesomeIcon
                className="header-button-icon fa-2x"
                icon={faCompass}
              />
            </Link>
          </div>
          <div data-testid="header-button">
            <Link
              className="header-button-link"
              to="/likes"
              data-testid="header-button-link-likes"
            >
              <FontAwesomeIcon
                className="header-button-icon fa-2x"
                icon={faHeart}
              />
            </Link>
          </div>
          <div
            data-testid="header-button"
            className="header-button-profile-link-container"
          >
            <Link
              className="header-button-link"
              to="/profile"
              data-testid="header-button-link-profile"
            >
              <img
                src="https://instagram.fapa1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/88310951_2944165445663961_6702094065074176000_n.jpg?tp=1&_nc_ht=instagram.fapa1-2.fna.fbcdn.net&_nc_ohc=HR4CQgiMxIgAX9j43rc&edm=ABfd0MgAAAAA&ccb=7-4&oh=016d04d106579d5741a736e133019510&oe=609FB6E5&_nc_sid=7bff83"
                className="link-profile-photo"
                alt="link-profile-photo"
              />
            </Link>
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/likes">
          <Likes />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
