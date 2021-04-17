import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProfileHeader = ({
  username,
  displayName,
  website,
  postCount,
  followerCount,
  followingCount,
  profilePhoto,
}) => {
  return (
    <div className="profile-header-container">
      <img
        src={profilePhoto}
        className="profile-header-photo"
        alt="profile-img"
      />
      <div className="profile-header-details">
        <div className="profile-header-top-section">
          <p className="profile-header-username">{username}</p>
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
        </div>
        <div className="profile-header-bottom-section">
          <span>{postCount} posts</span>
          <span>{followerCount} followers</span>
          <span>{followingCount} following</span>
        </div>
        <p data-testid="profile-header-description">
          <strong>{displayName}</strong>
          <br />
          {website}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
