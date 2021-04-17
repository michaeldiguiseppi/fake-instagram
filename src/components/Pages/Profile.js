import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
  const profileData = {
    username: "magicmikedee",
    postCount: 8,
    followerCount: 60,
    followingCount: 60,
    displayName: "Mike Dee",
    website: "www.mikedee.xyz",
    profilePhoto:
      "https://instagram.fapa1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/88310951_2944165445663961_6702094065074176000_n.jpg?tp=1&_nc_ht=instagram.fapa1-2.fna.fbcdn.net&_nc_ohc=HR4CQgiMxIgAX9j43rc&edm=ABfd0MgAAAAA&ccb=7-4&oh=016d04d106579d5741a736e133019510&oe=609FB6E5&_nc_sid=7bff83",
  };

  return (
    <div className="profile-container">
      <ProfileHeader {...profileData} />
    </div>
  );
};

export default Profile;
