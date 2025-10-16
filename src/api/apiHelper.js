// src/api/apiHelper.js
import axiosInstance from "./axiosInstance";

const apiHelper = {
  get: (endpoint, config = {}) => axiosInstance.get(endpoint, config),
  post: (endpoint, data, config = {}) =>
    axiosInstance.post(endpoint, data, config),
  put: (endpoint, data, config = {}) =>
    axiosInstance.put(endpoint, data, config),
  patch: (endpoint, data, config = {}) =>
    axiosInstance.patch(endpoint, data, config),
  delete: (endpoint, config = {}) => axiosInstance.delete(endpoint, config),
};

export default apiHelper;
