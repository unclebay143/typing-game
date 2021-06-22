import {
  CLEAR_SCREEN_MESSAGE,
  LOGIN_SUCCESSFULL,
  PLAYER_GAME_RECORD_LOADED,
  REGISTRATION_SUCCESSFUL,
  SET_SCREEN_MESSAGE,
  USER_LOADED,
  LOGOUT,
} from "../../types";
import UserService from "../service/user.services";

// Registration
export const register =
  ({ username, email, password }, { setSubmitting }) =>
  (dispatch) => {
    UserService.registerNewPlayer(username, email, password)
      .then((response) => {
        // handle error 400 - bad request
        if (response.status === 400) {
          dispatch({
            // Display error to the screen
            type: SET_SCREEN_MESSAGE,
            payload: {
              message: response.data.message,
              type: "danger",
            },
          });
          setSubmitting(false);
        }
        // If the registration is successful
        if (response.status === 200) {
          dispatch({
            type: REGISTRATION_SUCCESSFUL,
          });
          setSubmitting(false);
          window.location.assign("/#/welcome");
        }
      })
      .catch((error) => {
        dispatch({
          // Display other errors to the screen
          type: SET_SCREEN_MESSAGE,
          payload: error,
        });
      });
  };

// Login
export const login =
  ({ username, password }, { setSubmitting }) =>
  async (dispatch) => {
    try {
      const response = await UserService.loginPlayer(username, password);
      // handle error 400 - bad request
      if (response.status === 400) {
        dispatch({
          // Display error to the screen
          type: SET_SCREEN_MESSAGE,
          payload: {
            message: response.data.message,
            type: "danger",
          },
        });
        setSubmitting(false);
      }

      // If the login is successful
      if (response.status === 200) {
        //
        dispatch({
          type: LOGIN_SUCCESSFULL,
        });

        // Clear the current message
        dispatch({
          type: CLEAR_SCREEN_MESSAGE,
        });

        // Stop form loading state
        setSubmitting(false);

        // Store jwt to localstorage
        localStorage.setItem("jwt-token", response.data.token);

        // Redirect user to dashboard
        window.location.assign("/#/dashboard");
      }
    } catch (error) {
      dispatch({
        // Display other errors to the screen
        type: SET_SCREEN_MESSAGE,
        payload: error,
      });
    }
  };

// Load player profile
export const loadProfile = () => async (dispatch) => {
  try {
    const userProfile = await UserService.loadPlayerProfile();
    // Set user profile to redux
    if (userProfile) {
      dispatch({
        type: USER_LOADED,
        payload: userProfile.data.data[0],
      });
    }
  } catch (error) {
    console.log(error);
  }
};
// Load player game record
export const loadPlayerGameRecord = () => async (dispatch) => {
  try {
    const gameRecord = await UserService.loadPlayerGameRecord();
    // Set user profile to redux
    if (gameRecord) {
      dispatch({
        type: PLAYER_GAME_RECORD_LOADED,
        payload: gameRecord.data.data[0],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Logout
export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });

  // remove token from local-storage
  localStorage.removeItem("jwt-token");

  // Redirect user to landing page
  window.location.assign("/#/");
};
