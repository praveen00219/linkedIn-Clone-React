import React from "react";
import ProfileCard from "../common/profileCard/ProfileCard";
import "../profileCtx/style.scss";

const UsersCtx = ({ currentUser }) => {
  return (
    <div className="profileCtx">
      <ProfileCard currentUser={currentUser} />
    </div>
  );
};

export default UsersCtx;
