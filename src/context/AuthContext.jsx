import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(sessionStorage.getItem("user"));
    const storedToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // Login function
  // Login function
  const login = (userData, tokenValue, remember) => {
    if (remember  == undefined) {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", tokenValue);
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.setItem("token", tokenValue);
    }

    setUser(userData);
    setToken(tokenValue);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loading,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Helper hook to use context easily
export const useAuth = () => useContext(AuthContext);
