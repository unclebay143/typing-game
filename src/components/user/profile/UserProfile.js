import React from "react";
import "./userprofile.css";
// Image
import dummyImage from "./../../../assets/img/no-image-avatar.png";
import { useSelector } from "react-redux";
import { pageurl } from "../../pageurl";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  const { user, gameRecord } = useSelector((state) => state.user);

  const { userName, email, twitterHandle } = user || {};
  const { rank } = gameRecord || {};

  if (!user) {
    return <h4 className="no-network">Please wait...</h4>;
  }

  return (
    <React.Fragment>
      <div className="user">
        <img src={dummyImage} alt="empty profile avatar" />
        <h4 className="user-name">{userName}</h4>
        <p className="user-twitter-handle">
          @
          {twitterHandle || (
            <Link className="text-white" to={pageurl.UPDATE_PROFILE}>
              Update twitter handle
            </Link>
          )}
        </p>
        <p className="user-email-address">{email}</p>
        <span className="user-rank">Rank: {rank}</span>
      </div>
    </React.Fragment>
  );
};
