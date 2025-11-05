// src/api/axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie";

// Prefer the Vite env var `VITE_API_BASE_URL`, but also accept `VITE_API_URL`
// for convenience. If neither is set we fallback to an empty string so
// requests are relative to the current origin and we warn in console.
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "";

// If env vars are missing we'll keep baseURL empty (requests will be relative to origin).

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
    // Read token from cookie
    const token = Cookies.get("token");
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
      // Allow disabling automatic redirect via env var while debugging
      const DISABLE_401_REDIRECT = import.meta.env.VITE_DISABLE_401_REDIRECT === "true";

      // Per-request flag to skip automatic 401 redirect (useful for public endpoints
      // that intentionally return 401 for unauthenticated users). Consumers can set
      // `skipAuthRedirect: true` in the request config to avoid redirecting.
      const skipAuthRedirect = error.config?.skipAuthRedirect === true;

      if (!DISABLE_401_REDIRECT && !skipAuthRedirect) {
        // Remove token/user from both storages to be safe
        Cookies.remove("token");
        Cookies.remove("user");
        window.location.href = "/login";
      }
      // If skipAuthRedirect is true, we let the caller handle the 401 (reject below)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
