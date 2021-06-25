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
import { useDispatch } from "react-redux";
import { UserProfile } from "../../user/profile/UserProfile";
import { UpdateProfile } from "../../user/profile/UpdateProfile";

export const GameArea = () => {
  // STATE TO BE PASSED TO SIDEBAR FOR TOGGLE
  let prefferedTheme = JSON.parse(localStorage.getItem("_dark_theme"));
  const [darkTheme, setDarkTheme] = useState(prefferedTheme);
  const dispatch = useDispatch();
  const history = useHistory();

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

  // redirect to login page if not authenticated
  if (!token) {
    history.push(pageurl.LOGIN);
  }

  return (
    <React.Fragment>
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
