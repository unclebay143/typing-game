import {
  LOGIN_SUCCESSFULL,
  REGISTRATION_SUCCESSFUL,
  SET_SCREEN_MESSAGE,
} from "../../types";
import UserService from "../service.js/user.services";

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
  ({ userName, password }, { setSubmitting }) =>
  (dispatch) => {
    return UserService.loginPlayer(userName, password)
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
        // If the login is successful
        if (response.status === 200) {
          dispatch({
            type: LOGIN_SUCCESSFULL,
          });
          setSubmitting(false);
          window.location.assign("/#/dashboard");
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
