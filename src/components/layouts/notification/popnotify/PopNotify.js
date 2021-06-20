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
  // Component state
  const [currentMessage, setCurrentMessage] = useState(null);
  // Pull out message and message type
  const { message, type } = currentMessage || {};

  // Run whenever there is a message from redux
  useEffect(() => {
    // Set message from redux to the component state
    if (screenMessage) setCurrentMessage(screenMessage);
    return () => {};
  }, [screenMessage]);

  console.log(currentMessage);

  // Handle the screenMessage timeout
  // useEffect(() => {
  // 10 seconds
  // const duration = 100;
  // Only start the counter when there is a message on screen
  // const screenDelay =
  // currentMessage &&
  // setTimeout(() => {
  // dispatch({
  // Remove screen message from redux
  // type: CLEAR_SCREEN_MESSAGE,
  // });
  // }, duration);
  // return () => {
  // Remove setTimeout
  // clearTimeout(screenDelay);
  // };

  // if (currentMessage) {
  // dispatch({
  //   // Remove screen message from redux
  //   type: CLEAR_SCREEN_MESSAGE,
  // });
  // }
  // }, [dispatch, currentMessage]);

  const handleClose = () => {
    dispatch({
      type: CLEAR_SCREEN_MESSAGE,
    });
  };

  if (!screenMessage) return null;
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
