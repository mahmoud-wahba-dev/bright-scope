import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// ✅ Intercept requests
axiosInstance.interceptors.request.use(
  (config) => {
    // ⛔ لو الـ request عام (publicRequest = true) متضيفش Authorization
    if (config.publicRequest) {
      console.log("🌍 Public request — skipping token");
      return config;
    }

    const token = Cookies.get("token");
    console.log("🔍 Token before request:", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("✅ Authorization header added");
    } else {
      console.warn("⚠️ No token found in cookies!");
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Intercept responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const token = Cookies.get("token");

    // Requests عامة
    if (error.config?.publicRequest) {
      console.warn("🌍 Public request failed, skipping redirect");
      return Promise.reject(error);
    }

    // لو مفيش توكن من الأساس — ضيف رفض بدون حذف الكوكيز
    if (status === 401 && !token) {
      console.warn("🔸 401 with no token — guest user");
      return Promise.reject(error);
    }

    // لو فيه توكن و الـ backend فعلاً رافض — نعتبرها session منتهية
    if (status === 401 && token) {
      console.warn("⚠️ 401 with token — session expired");
      // ❌ ما تمسحش الكوكيز تلقائي هنا
      // ممكن مستقبلاً تستخدم refresh token logic هنا
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
