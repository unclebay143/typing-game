// FONT-AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

// LAYOUT
import { RegularButton } from "../../layouts/button/Button";

import face from "./../../../assets/img/no-image-avatar.png";
import { useDispatch } from "react-redux";
import { SET_SCREEN_MESSAGE } from "../../../redux/types";
import { timeAgo } from "../../_helper/time/time";

// Players card
export const TopPlayersCard = ({ userName, wpm, gameTime, accuracy }) => {
  const dispatch = useDispatch();

  // Twitter username not available
  const twitterDisable = () => {
    dispatch({
      type: SET_SCREEN_MESSAGE,
      payload: {
        message: "Not available 😴",
        type: "danger",
      },
    });
  };
  return (
    <div className="top-player">
      <div className="left-info">
        <div className="top-player--image">
          <img src={face} alt="top player avatar" />
        </div>
        <div className="player-information">
          <h3 className="player-name">{userName}</h3>
          <div className="player-details">
            <div className="player-star">
              <FontAwesomeIcon icon={faStar} className="checked-rank" />
              <FontAwesomeIcon icon={faStarHalfAlt} className="checked-rank" />
            </div>
            <p className="score-time">
              {" "}
              {wpm}wpm, {accuracy}% - {timeAgo(gameTime)}
            </p>
          </div>
        </div>
      </div>
      <div className="right-info">
        <RegularButton
          // linkUrl="https://www.twitter.com/unclebigbay143"
          func={() => twitterDisable()}
          look="custom--btn-touch"
          label="Twitter"
          icon={faTwitter}
          target="_blank"
        />
      </div>
    </div>
  );
};
