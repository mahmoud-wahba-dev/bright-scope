// src/api/axiosInstance.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle global API errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      console.warn("Unauthorized. Logging out...");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
