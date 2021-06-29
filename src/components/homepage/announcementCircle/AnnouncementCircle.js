import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "./announcement-circle.css";
import { Link } from "react-router-dom";
import { pageurl } from "../../pageurl";
import axios from "axios";
import {
  BASE_URL,
  LOAD_ALL_PLAYERS,
} from "../../../redux/user/service/root-endpoints";

export const AnnouncementCircle = () => {
  const [closeAnnouncement, setCloseAnnouncement] = useState(false);
  const [registeredUsername, setRegisteredUsername] = useState({});

  useEffect(() => {
    // don't forget to convert this function into service (reusable)
    async function getAllPlayers() {
      try {
        const players = await axios.get(BASE_URL + LOAD_ALL_PLAYERS);
        const playersUsername = players.data[0].map(
          (player) => player.userName
        );

        setRegisteredUsername(playersUsername);
      } catch (error) {
        console.log(error);
      }
    }

    getAllPlayers();
  }, []);

  console.log(registeredUsername);
  return (
    <React.Fragment>
      <section
        data-aos="zoom-in"
        className={`announcement-circle ${closeAnnouncement && "close-circle"}`}
      >
        <div className="announcement-circle--content">
          <h1>
            Join {registeredUsername[0] || "unclebigbay"},{" "}
            {registeredUsername[1] || "grace"} and {registeredUsername.length}+
            developers improving their typing speed.
          </h1>
          <div className="lets-go">
            <h1>
              <Link to={pageurl.REGISTER}>Let's go</Link>
            </h1>
            <FontAwesomeIcon
              className="lets-go-icon"
              icon={faArrowAltCircleRight}
            />
          </div>
        </div>
        <span
          className="announcement-circle--close"
          onClick={() => setCloseAnnouncement(true)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </section>
    </React.Fragment>
  );
};
