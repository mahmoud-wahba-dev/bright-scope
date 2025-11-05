import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUserJson = Cookies.get("user");
    const storedUser = storedUserJson ? JSON.parse(storedUserJson) : null;
    const storedToken = Cookies.get("token");

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // Login function
  // Login function
  const login = (userData, tokenValue, remember) => {
    // Use cookies for persistence. If remember is truthy set an expiry (30 days).
    try {
      if (remember) {
        Cookies.set("user", JSON.stringify(userData), { expires: 30 });
        Cookies.set("token", tokenValue, { expires: 30 });
      } else {
        // Session cookie (no expires) will be removed when browser is closed
        Cookies.set("user", JSON.stringify(userData));
        Cookies.set("token", tokenValue);
      }
    } catch (e) {
      // If cookies can't be set for some reason, fallback to in-memory only
      console.warn("Failed to set auth cookies", e);
    }

    setUser(userData);
    setToken(tokenValue);
  };

  // Logout function
  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
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
