import React, { useEffect, useState } from "react";
import { Navbar } from "../layouts/navbar/Navbar";
import "./homepage.css";
import { AnnouncementCircle } from "./announcementCircle/AnnouncementCircle";
import { TopPlayers } from "./top-players/TopPlayers";
import { ShareButtons } from "./social-media-share/ShareButtons";
import { OverHeadNotify } from "../layouts/notification/overheadnotify/OverHeadNotify";

// Animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Homepage = () => {
  // useEffect(() => {
  //   // AOS.refresh();
  // }, []);

  let isToken = localStorage.getItem("jwt-token");
  const [darkTheme, setDarkTheme] = useState("");
  let prefferedTheme = JSON.parse(localStorage.getItem("_dark_theme"));

  const theme = ["dark", "light"];
  const randomTheme = theme[Math.floor(Math.random() * theme.length)];
  const [useRandomTheme, setUseRandomTheme] = useState();

  // Set user preferred theme
  useEffect(() => {
    // if user is logged in use their theme
    if (isToken) {
      setDarkTheme(prefferedTheme);
    } else {
      //else random theme
      setUseRandomTheme(randomTheme);
    }
  }, [prefferedTheme, isToken, randomTheme]);

  return (
    <React.Fragment>
      {/* Over head navbar notification */}
      <OverHeadNotify />

      {/* component route */}
      <div className={`home ${darkTheme ? "dark" : useRandomTheme}`}>
        <Navbar />
        <AnnouncementCircle />
        <TopPlayers />
        <ShareButtons />
      </div>
    </React.Fragment>
  );
};
