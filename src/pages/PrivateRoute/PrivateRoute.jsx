import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  // ⛔️ طالما لسه بيحمّل البيانات من الكوكيز، متعملش حاجة
  if (loading) {
    return (
      <div className="center_flex h-screen text-primary text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
