// React
import axios from "axios";

// Endpoints
import { BASE_URL, LOGIN, REGISTER } from "./root-endpoints";

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
      // Access 400 message object
      validateStatus: function (status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
      },
    });
  } catch (error) {
    // Return error
    return error;
  }
};

// Export object of service functions
const UserService = {
  registerNewPlayer,
  loginPlayer,
};

export default UserService;
