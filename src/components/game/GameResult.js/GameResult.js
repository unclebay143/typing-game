import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faReply,
  faReplyAll,
  faRibbon,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, RegularButton } from "../../layouts/button/Button";
import { pageurl } from "../../pageurl";
import "./gameresult.css";

export const GameResult = () => {
  const { wpm, accuracy } = useSelector((state) => state.game);
  const history = useHistory();

  // if (!wpm && !accuracy) {
  //   history.push(pageurl.DASHBOARD);
  // }
  return (
    <React.Fragment>
      <div className="result-container">
        {/*  */}
        <section className="">
          <div className="result-heading">
            <h1>Typing Result 😀</h1>
          </div>
        </section>

        {/* SCORE POINTS     */}
        <section className="result-body">
          <div className="heading">
            <span>WPM</span>
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
            linkUrl={`https://twitter.com/intent/tweet?text=I just scored ${wpm}wpm and had ${accuracy} accuracies on developers typing game website developed by @unclebigbay143 @hashnode @harperdbio`}
            icon={faTwitter}
            label="Tweet"
            abbrTitle="Share your achievement"
          />
        </section>
      </div>
    </React.Fragment>
  );
};
