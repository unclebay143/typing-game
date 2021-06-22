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
import { Link } from "react-router-dom";
import { pageurl } from "../../pageurl";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/user/actions/user.actions";
import { comingSoon } from "../../comingSoon";

export const SidebarMenu = ({ openMenu }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [playerProfile, setPlayerProfile] = useState({});
  const { userName, email } = playerProfile;

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
          <div>
            {userName} <br />
            {email}
          </div>
        </section>
        <section className="sidebar-menu--2">
          <div
            className="sidebar-link"
            // href="#"
            // target="_blank"
            // rel="noopener noreferrer"
            onClick={() => dispatch(comingSoon("View profile"))}
          >
            <div className="link-icon">
              <FontAwesomeIcon icon={faUserCircle} className="logout-icon" />
            </div>
            View profile
          </div>

          <a
            href={pageurl.HOMEPAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
          >
            <div className="link-icon">
              <FontAwesomeIcon icon={faBorderAll} className="logout-icon" />
            </div>
            Leader Board
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

          <div
            className="sidebar-link"
            // href="#"
            // target="_blank"
            // rel="noopener noreferrer"
            onClick={() => dispatch(comingSoon("Update profile"))}
          >
            <div className="link-icon">
              <FontAwesomeIcon icon={faUserEdit} className="logout-icon" />
            </div>
            Update profile
          </div>
        </section>
        <section className="sidebar-menu--3" onClick={() => dispatch(logOut())}>
          <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
          <span>Log out</span>
        </section>
      </div>
    </React.Fragment>
  );
};