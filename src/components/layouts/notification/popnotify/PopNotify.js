import React, { useState, useEffect } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popnotify.css";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_SCREEN_MESSAGE } from "../../../../redux/types";

// Generate icon based on message Type
const iconPicker = (messageType) => {
  // Set notification icon
  switch (messageType) {
    case "success":
      return faCheck;
    case "danger":
      return faTimes;
    default:
      break;
  }
};

export const PopNotify = () => {
  const dispatch = useDispatch();

  // Pull out screenMessage from user reducer
  const { screenMessage } = useSelector((state) => state.user);

  // Component state for screen message
  const [currentMessage, setCurrentMessage] = useState(null);

  // Pull out message and message-type from currentMessage
  const { message, type } = currentMessage || {};

  // Run whenever there is a message from redux
  useEffect(() => {
    // Set message from redux to the component state for screen message
    if (screenMessage.message) setCurrentMessage(screenMessage);
  }, [screenMessage.message, screenMessage]);

  // Handle the screenMessage timeout
  useEffect(() => {
    // delay time in seconds
    const duration = 5000;
    // start the counter when there is a message on screen
    const screenDelay =
      currentMessage &&
      setTimeout(() => {
        dispatch({
          // Remove screen message from redux
          type: CLEAR_SCREEN_MESSAGE,
        });
      }, duration);
    return () => {
      // Remove setTimeout
      clearTimeout(screenDelay);
    };
  }, [dispatch, currentMessage]);

  // Clear screen message from redux on user click
  const handleClose = () => {
    dispatch({
      type: CLEAR_SCREEN_MESSAGE,
    });
  };
  // If no screen message display nothing
  if (!screenMessage.message) return null;
  return (
    <React.Fragment>
      <section className={`pop-notifier ${type}`} onClick={() => handleClose()}>
        {/* Only render icon when there is a type - solve null error message on console*/}
        {type && <FontAwesomeIcon icon={iconPicker(type)} />}
        {message}
      </section>
    </React.Fragment>
  );
};
