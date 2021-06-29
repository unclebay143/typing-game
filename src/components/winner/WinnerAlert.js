import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RegularButton } from "../layouts/button/Button";
import "./winner.css";

export const WinnerAlert = () => {
  const { gameRecord } = useSelector((state) => state.user);
  const [congratulate, setCongratulate] = useState(false);
  const { rank } = gameRecord || {};
  const [rankWord, setrankWord] = useState();

  useEffect(() => {
    if (rank > 0 && rank < 6) {
      setCongratulate(true);
    }
  }, [rank]);

  useEffect(() => {
    if (rank) {
      switch (rank) {
        case 1:
          setrankWord("1st");
        case 2:
          setrankWord("2nd");
        case 3:
          setrankWord("3rd");
        case 4:
          setrankWord("4th");
        default:
          break;
      }
    }
  }, [rank]);

  return (
    <React.Fragment>
      <div
        className={`winner-alert ${
          congratulate ? "open-alert" : "close-alert"
        }`}
      >
        <section className="winner-alert--wrapper">
          <section
            className="close-winner--alert"
            onClick={() => setCongratulate(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </section>

          <section className="content">
            <h1>Congratulations</h1>

            <p>you are the {rankWord} fastest developer</p>
            <span>
              <RegularButton
                type="custom--btn-outline twitter-share-button"
                target="_blank"
                rel="noopener noreferrer"
                linkUrl={`https://twitter.com/intent/tweet?text=I am the number ${rank} fastest typist on the developers typing game website developed by @unclebigbay143
            
            
            Check out how fast your coding speed is on https://developer-typing-game.netlify.app/`}
                label="Tweet"
                abbrTitle="Share your achievement"
              />
            </span>
          </section>
          <section className="balloon-container">
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};
