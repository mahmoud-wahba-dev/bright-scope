import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";
import ScrollToTop from "../composable/ScrollToTop";

const AuthLayout = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
};

export default AuthLayout;
