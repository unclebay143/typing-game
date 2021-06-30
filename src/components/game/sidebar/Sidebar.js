import { faCloud, faHome, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { pageurl } from "../../pageurl";
import { AudioPlayer } from "../music/AudioPlayer";
import "./sidebar.css";
import dummyImage from "./../../../assets/img/no-image-avatar.png";

import { SidebarMenu } from "./SidebarMenu";
import { comingSoon } from "../../comingSoon";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = ({ themeCallback }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const location = useLocation();
  const { notification } = useSelector((state) => state.user);

  const [showHomeButton, setShowHomeButton] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  let prefferedTheme = JSON.parse(localStorage.getItem("_dark_theme"));

  // check if the current path is the dashboard
  const currentPageNotDashboard =
    location.pathname === pageurl.DASHBOARD ? false : true;

  useEffect(() => {
    setDarkTheme(prefferedTheme);

    // If the current page is not dashboard
    if (currentPageNotDashboard) {
      setShowHomeButton(true);
    } else {
      // If the current page is dashboard, hide the icon
      setShowHomeButton(false);
    }

    // themeCallback(prefferedTheme)
  }, [prefferedTheme, currentPageNotDashboard]);

  const handleThemeSwitch = () => {
    // CHECK THE LOCALSTORAGE FOR USER'S PREVIOUS THEME
    localStorage.setItem("_dark_theme", !darkTheme);
    // UPDATE THE SIDEBAR STATE FOR ICON SWITCH
    setDarkTheme(!darkTheme);
    // UPDATE THE CALLBACK - GameArea
    themeCallback(!darkTheme);
  };

  return (
    <React.Fragment>
      <aside className={`sidebar ${notification && "custom-pt-5"} `}>
        <section className="sidebar-items-top">
          <div className="select-pro-language">
            <select
              className="form-control d-none"
              onChange={() => dispatch(comingSoon("Language Selection"))}
            >
              <option>javascript</option>
              <option>html</option>
              <option>css</option>
            </select>
          </div>

          {showHomeButton && (
            <div className="navigation-icon">
              <Link to={pageurl.DASHBOARD}>
                <abbr title="Dashboard">
                  <FontAwesomeIcon icon={faHome} />
                </abbr>
              </Link>
            </div>
          )}
        </section>

        <section className="sidebar-items-down">
          <AudioPlayer />
          <div className="theme-toggle">
            <abbr title="Switch Theme">
              <FontAwesomeIcon
                icon={darkTheme ? faCloud : faSun}
                onClick={handleThemeSwitch}
              />
            </abbr>
          </div>
          <div
            to={pageurl.GAME_RESULT}
            className={`profile-image ${notification && "lift"}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <img src={dummyImage} alt="player profile" />
          </div>
        </section>
        <SidebarMenu openMenu={openMenu} />
      </aside>
    </React.Fragment>
  );
};
