import React, { useEffect, useState } from "react";
import "./typingboard.css";
import useKeyPress from "../../../hooks/useKeyPress";
import { codeQuotes } from "./codeQuotes";
import { currentTime } from "../../_helper/time/time";
import { PlayerPerformance } from "../performance/PlayerPerformance";
import { smileyMode } from "./smileyMode";
import { pageurl } from "../../pageurl";
import { useHistory } from "react-router";
import { updatePlayerGameRecord } from "../../../redux/game/actions/game.action";
import { useDispatch } from "react-redux";

export const TypingBoard = () => {
  const { javascript } = codeQuotes;
  const history = useHistory();
  const dispatch = useDispatch();
  const [preferredLanguage, setPreferredLanguage] = useState(javascript);
  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentCharBlockIndex, setCurrentCharBlockIndex] = useState(0);
  const [leftPadding, setLeftPadding] = useState(
    new Array(5).fill(" ").join("")
  );
  const [currentChar, setCurrentChar] = useState(
    preferredLanguage[currentCharBlockIndex].charAt(0)
  );
  const [incomingChars, setIncomingChars] = useState(
    preferredLanguage[currentCharBlockIndex].substr(1)
  );
  const [startTime, setStartTime] = useState();
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [typedChars, setTypedChars] = useState("");
  const [darkTheme, setDarkTheme] = useState("");
  let prefferedTheme = JSON.parse(localStorage.getItem("_dark_theme"));

  // Count down
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  // Set user preferred theme
  useEffect(() => {
    setDarkTheme(prefferedTheme);
  }, [prefferedTheme]);

  useKeyPress((key) => {
    // 1 TEMPORARY HOLDER FOR LATER USE
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    //2 - ENSURES THE USER ENTERS THE CORRECT KEYWORD BEFORE NEXT
    if (key === currentChar) {
      //3
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(10));
      }

      //4
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);

      //5
      setCurrentChar(incomingChars.charAt(0));

      //6
      updatedIncomingChars = incomingChars.substring(1);
      // if (updatedIncomingChars.split(' ').length === 1) {
      if (updatedIncomingChars.length === 20) {
        updatedIncomingChars += " " + nextCode(preferredLanguage);
      }

      setIncomingChars(updatedIncomingChars);
    }

    // 1 -START TIME WHEN THE USER BEGINS TO TYPE
    if (!startTime) {
      // Set the typing start time
      setStartTime(currentTime());
      // Start the count down
      setIsTimeRunning(true);
    }

    /* WPM LOGIC */

    //2 - IF THE USER HIT THE CORRECT BAR SPACE
    if (incomingChars.charAt(0) === " ") {
      //4 - INCREASE THE WORD COUNT
      setWordCount(wordCount + 1);

      //5 - TIME SPENT TYPING
      const durationInMinutes = (currentTime() - startTime) / 60000.0;

      //6 // SET WPM
      setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
    }

    /* ACCURACY LOGIC */

    //1 -ADD ALL PRESSED KEYS
    const updatedTypedChars = typedChars + key;
    setTypedChars(updatedTypedChars);

    //3 -DIVIDE THE OUTGOING CHARACTERS WITH THE TYPED CHARACTERS
    setAccuracy(
      ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(
        2
      )
    );
  });

  // FUNCTION THAT GETS THE NEXT CODE FROM THE ARRAY
  const nextCode = (array) => {
    // ONLY RUN IF THERE IS MORE CODE
    if (
      currentCharBlockIndex >= 0 &&
      currentCharBlockIndex < array.length - 1
    ) {
      // GET THE NEXT CODE ITEM
      const nextItem = array[currentCharBlockIndex + 1];

      // UPDATE THE setCurrentCharBlockIndex WITH THE CURRENT ITEM INDEX
      setCurrentCharBlockIndex(currentCharBlockIndex + 1);

      return nextItem;
    }

    // RETURN EMPTY STRING WHEN THE ARRAY IS ZERO INSTEAD OF FUNCTION DEFAULT UNDEFINED
    return "";
  };

  useEffect(() => {
    // HANDLE GAME TIMING
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  // EeND GAME
  function endGame() {
    setIsTimeRunning(false);
    dispatch(updatePlayerGameRecord(Math.round(wpm), Math.round(accuracy)));
    history.push(pageurl.GAME_RESULT);
  }

  return (
    <React.Fragment>
      <div className="typing-board">
        <PlayerPerformance
          currentGameWpm={wpm}
          currentGameAccuracy={accuracy}
        />
        <h1 className="no-mobile-version">Switch to pc</h1>
        <h1 className="show-smiley">
          {" "}
          {timeRemaining} {smileyMode(wpm, accuracy)}
        </h1>
        <section className={`typing-wrapper ${darkTheme ? "dark" : "light"}`}>
          <div className="typing-text">
            <code className="character-out">
              {(leftPadding + outgoingChars).slice(-20)}
            </code>

            <code className="current-incoming-character">
              {currentChar}
              {incomingChars.substr(0, 200)}
            </code>
          </div>
        </section>
        <section className="typing-input-wrapper">
          <textarea
            placeholder="Start coding..."
            value={outgoingChars}
            spellCheck="false"
            autoFocus
            readOnly
          ></textarea>
        </section>
      </div>
    </React.Fragment>
  );
};
