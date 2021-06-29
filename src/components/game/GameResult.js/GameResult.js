import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RegularButton } from "../../layouts/button/Button";
import { pageurl } from "../../pageurl";
import "./gameresult.css";

export const GameResult = () => {
  const { wpm, accuracy } = useSelector((state) => state.game);
  // STATE TO BE PASSED TO SIDEBAR FOR TOGGLE
  let prefferedTheme = JSON.parse(localStorage.getItem("_dark_theme"));
  const [darkTheme, setDarkTheme] = useState(prefferedTheme);
  const history = useHistory();

  // Set user preferred theme
  useEffect(() => {
    setDarkTheme(prefferedTheme);
  }, [prefferedTheme]);

  if (!wpm && !accuracy) {
    history.push(pageurl.DASHBOARD);
  }
  return (
    <React.Fragment>
      <div className={`result-container ${darkTheme ? "dark" : "light-mode"}`}>
        {/*  */}
        <section className="">
          <div className="result-heading">
            <h1>Typing Result 😀</h1>
          </div>
        </section>

        {/* SCORE POINTS     */}
        <section className="result-body">
          <div className="heading">
            <span>CPM</span>
            <span>ACCURACY</span>
          </div>
          <div className="point-heading">
            <span>{wpm}</span>
            <span>{accuracy}%</span>
          </div>
        </section>

        {/*  */}
        <section className="share-point">
          <RegularButton
            type="custom--btn-outline twitter-share-button"
            linkUrl={`#${pageurl.DASHBOARD}`}
            icon={faReply}
            label="Play Again"
          />
          <RegularButton
            type="custom--btn-outline twitter-share-button"
            target="_blank"
            rel="noopener noreferrer"
            linkUrl={`https://twitter.com/intent/tweet?text=I just scored ${wpm}cpm and had ${accuracy} accuracies on developers typing game website developed by @unclebigbay143 @hashnode @harperdbio 
            
            
            Check out how fast your coding speed is on https://developer-typing-game.netlify.app/`}
            icon={faTwitter}
            label="Tweet"
            abbrTitle="Share your achievement"
          />
        </section>
      </div>
    </React.Fragment>
  );
};
