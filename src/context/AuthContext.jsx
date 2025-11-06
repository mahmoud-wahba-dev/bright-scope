// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserJson = Cookies.get("user");
    const storedUser = storedUserJson ? JSON.parse(storedUserJson) : null;
    const storedToken = Cookies.get("token");

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    } else {
      setUser(null);
      setToken(null);
    }
    setLoading(false);
  }, []);


  const login = (userData, accessToken, remember = false) => {
    const baseOptions = {
      path: "/",
      sameSite: "Lax",
      secure: window.location.protocol === "https:",
    };

    // Remember Me = 30 يوم / غير كده = session cookie
    const cookieOptions = remember
      ? { ...baseOptions, expires: 30 }
      : baseOptions;

    Cookies.set("user", JSON.stringify(userData), cookieOptions);
    Cookies.set("token", accessToken, cookieOptions);

    console.log("✅ Cookies saved:", Cookies.get());
    setUser(userData);
    setToken(accessToken);
  };

  // ✅ logout function
  const logout = () => {
    Cookies.remove("user", { path: "/" });
    Cookies.remove("token", { path: "/" });
    setUser(null);
    setToken(null);
  };

  const value = {
    user,
    token,
    login,
    logout,
    loading,
    isAuthenticated: !!token,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
        Loading authentication...
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
