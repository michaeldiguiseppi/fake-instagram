import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProfileHeader = ({ posts, followers, following }) => {
  return (
    <div className="profile-header-container">
      <img
        src="https://instagram.fapa1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/88310951_2944165445663961_6702094065074176000_n.jpg?tp=1&_nc_ht=instagram.fapa1-2.fna.fbcdn.net&_nc_ohc=HR4CQgiMxIgAX9j43rc&edm=ABfd0MgAAAAA&ccb=7-4&oh=016d04d106579d5741a736e133019510&oe=609FB6E5&_nc_sid=7bff83"
        className="profile-header-photo"
        alt="profile-img"
      />
      <p className="profile-header-username">magicmikedee</p>
      <div
        className="profile-header-edit-profile-button"
        onClick={() => console.log("clicked edit profile")}
      >
        Edit Profile
      </div>
      <div
        className="profile-header-settings-button"
        data-testid="profile-header-settings-button"
        onClick={() => console.log("settings button clicked")}
      >
        <FontAwesomeIcon
          className="profile-header-settings-button-icon fa-2x"
          icon={faCog}
        />
      </div>
      <span>{posts} posts</span>
      <span>{followers} followers</span>
      <span>{following} following</span>
      <p data-testid="profile-header-description">Description here</p>
    </div>
  );
};

export default ProfileHeader;
