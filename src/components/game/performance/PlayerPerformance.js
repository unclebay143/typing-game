import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./playerperformance.css";

export const PlayerPerformance = ({ currentGameWpm, currentGameAccuracy }) => {
  const [togglePerformance, setTogglePerformance] = useState(false);
  const { gameRecord } = useSelector((state) => state.user);
  const { rank, wpm, accuracy } = gameRecord || {};
  return (
    <React.Fragment>
      <section
        className={`typist-performance ${
          togglePerformance && "collapse-typist-performance"
        }`}
        onClick={() => setTogglePerformance(!togglePerformance)}
      >
        <div className="rank-info">
          <FontAwesomeIcon icon={faStar} />
          <span className="position">{rank || "0"}</span>
        </div>
        <div className="current-performance">
          <span className="wpm">CPM: {currentGameWpm} </span> |{" "}
          <span className="accuracy"> ACC: {currentGameAccuracy}%</span>
        </div>
        <div
          className={`full-performance ${
            togglePerformance && "display-full-performance"
          }`}
        >
          <p>CPM: {wpm}</p>
          <p>ACCURACY: {accuracy}%</p>
        </div>
      </section>
    </React.Fragment>
  );
};
