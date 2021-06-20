// Axios
import axios from "axios";

// Axios instance
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    Accepted: "appication/json",
    "Content-Type": "application/json",
  },
});

// Inject token to the request header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
