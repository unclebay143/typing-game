// React
import axios from "axios";
import axiosInstance from "../../../axios";

// Endpoints
import {
  BASE_URL,
  LOAD_PLAYER_GAME_RECORD,
  LOAD_USER_ENDPOINT,
  LOGIN,
  REGISTER,
  UPDATE_USER_PROFILE_ENDPOINT,
} from "./root-endpoints";

// Registration service function
const registerNewPlayer = async (username, email, password) => {
  const payload = {
    userName: username,
    email,
    password,
  };

  // Async/Await
  try {
    const res = await axios.post(BASE_URL + REGISTER, payload, {
      // Access 400 message object
      validateStatus: function (status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
      },
    });

    // return response to action
    return res;
  } catch (error) {
    // Return error
    return error;
  }
};

// Login service function
const loginPlayer = async (username, password) => {
  const payload = {
    userName: username,
    password: password,
  };

  // Async/Await
  try {
    const res = await axios.post(BASE_URL + LOGIN, payload, {
      // Access 400 message object from response
      validateStatus: function (status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
      },
    });

    // Return response to action
    return res;
  } catch (error) {
    // Return error
    return error;
  }
};

// Load user
const loadPlayerProfile = async () => {
  // Async/Await
  try {
    const res = await axiosInstance.get(BASE_URL + LOAD_USER_ENDPOINT, {
      // Access 400 message object
      validateStatus: function (status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
      },
    });

    // Return response to action
    return res;
  } catch (error) {
    // Return error
    return error;
  }
};

// Update user profile (twitter for now)
export const updatePlayerProfile = async (twitterHandle) => {
  try {
    const res = await axiosInstance.put(
      BASE_URL + UPDATE_USER_PROFILE_ENDPOINT,
      twitterHandle
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

// Load user
const loadPlayerGameRecord = async () => {
  // Async/Await
  try {
    const res = await axiosInstance.get(BASE_URL + LOAD_PLAYER_GAME_RECORD, {
      // Access 400 message object
      validateStatus: function (status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
      },
    });

    // Return response to action
    return res;
  } catch (error) {
    // Return error
    return error;
  }
};

// Export object of service functions
const UserService = {
  registerNewPlayer,
  loginPlayer,
  loadPlayerProfile,
  updatePlayerProfile,
  loadPlayerGameRecord,
};

export default UserService;
