import React, { useEffect, useState } from "react";
import "./sidebar-menu.css";

// Image
import dummyImage from "./../../../assets/img/no-image-avatar.png";

// Fontawesome
import {
  faBorderAll,
  faSignOutAlt,
  faUserCircle,
  faUserEdit,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pageurl } from "../../pageurl";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/user/actions/user.actions";
import { comingSoon } from "../../comingSoon";

export const SidebarMenu = ({ openMenu }) => {
  const dispatch = useDispatch();
  const [playerProfile, setPlayerProfile] = useState({});
  const { user, gameRecord } = useSelector((state) => state.user);
  const { userName } = playerProfile;
  const { rank } = gameRecord || {};

  useEffect(() => {
    if (user) {
      setPlayerProfile(user);
    }
  }, [user]);

  return (
    <React.Fragment>
      <div className={`sidebar-menu ${openMenu ? "open" : "closed"}`}>
        <section className="sidebar-menu--1">
          <img src={dummyImage} alt="empty profile avatar" />
          <div className="menu-1--item">
            {userName} <br />
            <p>Rank: {rank}</p>
          </div>
        </section>
        <section className="sidebar-menu--2">
          <a className="sidebar-link" href={`#${pageurl.USER_PROFILE}`}>
            <div className="link-icon">
              <FontAwesomeIcon icon={faUserCircle} className="logout-icon" />
            </div>
            View profile
          </a>

          <a
            href={pageurl.HOMEPAGE}
            className="sidebar-link"
            // target="_blank" uncomment when there is a live update
            // rel="noopener noreferrer"
          >
            <div className="link-icon">
              <FontAwesomeIcon icon={faBorderAll} className="logout-icon" />
            </div>
            Leaderboard
          </a>

          <div
            className="sidebar-link"
            // href="#"
            // target="_blank"
            // rel="noopener noreferrer"
            onClick={() => dispatch(comingSoon("Multiplayer"))}
          >
            <div className="link-icon">
              <FontAwesomeIcon icon={faUserFriends} className="logout-icon" />
            </div>
            Multi Player
          </div>

          <a className="sidebar-link" href={`#${pageurl.UPDATE_PROFILE}`}>
            <div className="link-icon">
              <FontAwesomeIcon icon={faUserEdit} className="logout-icon" />
            </div>
            Update profile
          </a>
        </section>
        <section className="sidebar-menu--3" onClick={() => dispatch(logOut())}>
          <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
          <span>Log out</span>
        </section>
      </div>
    </React.Fragment>
  );
};
