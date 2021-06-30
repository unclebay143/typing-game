import React, { useEffect, useState } from "react";
import "./gamearea.css";

// COMPONENTS
import { TypingBoard } from "../typingboard/TypingBoard";
import { Sidebar } from "../sidebar/Sidebar";
import { GameResult } from "../GameResult.js/GameResult";
import { Route, Switch, useHistory } from "react-router";
import { pageurl } from "../../pageurl";
import {
  loadPlayerGameRecord,
  loadProfile,
} from "../../../redux/user/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { UserProfile } from "../../user/profile/UserProfile";
import { UpdateProfile } from "../../user/profile/UpdateProfile";
import { WinnerAlert } from "../../winner/WinnerAlert";
import { NotifyPlayer } from "../../layouts/notification/flier-notification/Notify";
import { CLEAR_NOTIFICATION, SET_NOTIFICATION } from "../../../redux/types";

export const GameArea = () => {
  // STATE TO BE PASSED TO SIDEBAR FOR TOGGLE
  let prefferedTheme = JSON.parse(localStorage.getItem("_dark_theme"));
  const [darkTheme, setDarkTheme] = useState(prefferedTheme);
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.user);
  const { twitterHandle } = user || {};

  // Get user jwt token
  const token = localStorage.getItem("jwt-token");

  // Set user preferred theme
  useEffect(() => {
    setDarkTheme(prefferedTheme);
  }, [prefferedTheme]);

  // Load user profile
  useEffect(() => {
    dispatch(loadProfile());
    dispatch(loadPlayerGameRecord());
  }, [dispatch]);

  // Notify user to update profile
  useEffect(() => {
    if (user && !twitterHandle) {
      dispatch({
        type: SET_NOTIFICATION,
        payload: {
          message: `your profile with your twitter handle to get more followers when you reach `,
          url: pageurl.UPDATE_PROFILE,
          urlLabel: "update",
          moreUrl: {
            url1: pageurl.HOMEPAGE,
            url1Label: "top 10 players.",
          },
        },
      });
    } else {
      dispatch({
        type: CLEAR_NOTIFICATION,
      });
    }
  }, [twitterHandle, user, dispatch]);

  // redirect to login page if not authenticated
  if (!token) {
    history.push(pageurl.LOGIN);
  }

  return (
    <React.Fragment>
      <WinnerAlert />
      <NotifyPlayer />
      <main className={`game-container ${darkTheme ? "dark" : "light-mode"}`}>
        <Switch>
          <Route exact path={pageurl.GAME_RESULT} component={GameResult} />
          <Route exact path={pageurl.DASHBOARD} component={TypingBoard} />
          <Route exact path={pageurl.USER_PROFILE} component={UserProfile} />
          <Route
            exact
            path={pageurl.UPDATE_PROFILE}
            component={UpdateProfile}
          />
        </Switch>
      </main>
      <Sidebar themeCallback={setDarkTheme} />
    </React.Fragment>
  );
};
