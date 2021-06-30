// React
import React, { useEffect, useState } from "react";
// Styles
import "./top-players.css";

// Axios
import axios from "axios";
import {
  BASE_URL,
  LOAD_ALL_PLAYERS,
} from "../../../redux/user/service/root-endpoints";

// Images
import wavingHand from "./../../../assets/img/waving-hand.gif";

// Component
import { TopPlayersCard } from "./TopPlayersCard";
import { SET_SCREEN_MESSAGE } from "../../../redux/types";
import { useDispatch } from "react-redux";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rankPlayers } from "./rankPlayers";

export const TopPlayers = () => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [topPlayers, setTopPlayers] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    // Get all players
    const fetchTopPlayers = async () => {
      try {
        // Get players
        const players = await axios.get(BASE_URL + LOAD_ALL_PLAYERS);

        const samplePlayer = [
          {
            player: 2,
            wpm: 8,
            accuracy: 99,
          },
          {
            player: 1,
            wpm: 9,
            accuracy: 100,
          },
          {
            player: 3,
            wpm: 7,
            accuracy: 98,
          },
        ];

        // Extract players array from response
        const extractPlayersArray = players.data[0];
        if (extractPlayersArray) {
          // Sort top players from current lead to least
          const descendingOrderOfPlayers = extractPlayersArray.sort((a, b) => {
            // sort by wpm/code per minute
            return b.wpm - a.wpm;
          });

          // Rank the user in the database
          rankPlayers(descendingOrderOfPlayers);

          // Remove loader
          setIsLoading(false);

          // Store the sorted top players to the state
          setTopPlayers(descendingOrderOfPlayers);
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: SET_SCREEN_MESSAGE,
          payload: {
            type: "danger",
            message: "Can't Fetch Top players 😪",
          },
        });
      }
    };

    fetchTopPlayers();
  }, [dispatch]);

  // Number of topPlayers to display
  const topPlayerLimit = showAll ? 10 : 5;

  // Handle the show more button
  const handleShowAll = () => {
    return setShowAll(!showAll);
  };

  // Show loader if the players have not been fetched
  if (isLoading) {
    return (
      <div className="rank-section loading">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    );
  }

  return (
    <React.Fragment>
      <section className="rank-section">
        <div className="welcome-user">
          <div className="greeting-text">
            <h2>How is coding today?</h2>
            {/* <h2>Welcome back</h2> when logged in */}
          </div>
          <img src={wavingHand} alt="waving hand" className="waving-hand" />
        </div>
        <div className="rank-board">
          <div className="rank-board--heading">
            <h3>Top 10 Fastest Typist</h3>
          </div>
          {topPlayers
            ?.slice(0, topPlayerLimit)
            .map(({ wpm, accuracy, id, time, userName, twitterHandle }) => {
              return (
                <TopPlayersCard
                  key={id}
                  wpm={wpm}
                  accuracy={accuracy}
                  userName={userName}
                  id={id}
                  gameTime={time}
                  twitterHandle={twitterHandle}
                />
              );
            })}
          <div className="board-toggler">
            <button
              onClick={handleShowAll}
              className="button custom--btn custom--btn-outline-primary"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
