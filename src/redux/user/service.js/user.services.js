import axios from "axios";
import { BASE_URL, REGISTER } from "./root-endpoints";

// Service registration function
const registerPlayer = async (username, email, password) => {
  const payload = {
    userName: username,
    email,
    password,
  };

  // Async await
  try {
    const res = await axios.post(BASE_URL + REGISTER, payload, {
      // Access 400 message object
      validateStatus: function (status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

// Export object of service functions
const USERSERVICE = {
  registerPlayer,
};

export default USERSERVICE;
