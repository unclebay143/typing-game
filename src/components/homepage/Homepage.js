import React from "react";
import { Navbar } from "../layouts/navbar/Navbar";
import "./homepage.css";
import { AnnouncementCircle } from "./announcementCircle/AnnouncementCircle";
import { TopPlayers } from "./top-players/TopPlayers";
import { ShareButtons } from "./social-media-share/ShareButtons";
import { OverHeadNotify } from "../layouts/notification/overheadnotify/OverHeadNotify";

export const Homepage = () => {
  return (
    <React.Fragment>
      {/* OVERHEAD NAVBAR NOTIFICATION */}
      <OverHeadNotify />

      {/* COMPONENT ROUTE */}
      <div className="home">
        <Navbar />
        <AnnouncementCircle />
        <TopPlayers />
        <ShareButtons />
      </div>
    </React.Fragment>
  );
};
