import React from "react";
// import { forgotPasswordSchema } from "../../_helper/validator/schema";
import "./userprofile.css";
// Image
import dummyImage from "./../../../assets/img/no-image-avatar.png";
import { useSelector } from "react-redux";

export const UserProfile = () => {
  const { userName, twitterHandle, gameRecord } = useSelector(
    (state) => state.user
  );
  return (
    <React.Fragment>
      <div className="user">
        <img src={dummyImage} alt="empty profile avatar" />
        <h4 className="user-name">unclebigbay</h4>
        <p className="user-twitter-handle">@unclebigbay132</p>
        <span className="user-rank">Rank: 2</span>
      </div>
    </React.Fragment>
  );
};
