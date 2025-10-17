import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";

const AuthLayout = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
};

export default AuthLayout;
