import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RegularButton } from "../layouts/button/Button";
import "./winner.css";

export const WinnerAlert = () => {
  const { gameRecord } = useSelector((state) => state.user);
  const [congratulate, setCongratulate] = useState(false);
  const { rank, userName } = gameRecord || {};
  const [rankWord, setrankWord] = useState();
  useEffect(() => {
    if (rank > 0 && rank < 6) {
      setCongratulate(true);
    }
  }, [rank]);

  useEffect(() => {
    if (rank && congratulate) {
      switch (rank) {
        case 1:
          setrankWord("1st");
          break;
        case 2:
          setrankWord("2nd");
          break;
        case 3:
          setrankWord("3rd");
          break;
        case 4:
          setrankWord("4th");
          break;
        case 5:
          setrankWord("5th");
          break;
        default:
          break;
      }
    }
  }, [rank, congratulate]);

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
            <h1>Congratulations!!!</h1>
            <p>
              <span className="congratulation-name">{userName}</span>, you are
              the {rankWord} fastest developer
            </p>
            <span>
              <RegularButton
                type="custom--btn-outline twitter-share-button"
                target="_blank"
                rel="noopener noreferrer"
                linkUrl={`
                
                https://twitter.com/intent/tweet?text=I am the ${rankWord} fastest typist on the developers typing game website developed by @unclebigbay143

                Check out how fast your coding speed is on https://developer-typing-game.netlify.app/`}
                label="Tweet"
                abbrTitle="Share your achievement"
              />
            </span>
          </section>
          <section className="balloon-container">
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};
