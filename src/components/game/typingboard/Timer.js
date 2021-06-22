import React, { useEffect, useState } from "react";

export const Timer = ({ startingTime = 10, start }) => {
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(start);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  function endGame() {
    setIsTimeRunning(false);
  }

  return <span>{timeRemaining}</span>;
};
