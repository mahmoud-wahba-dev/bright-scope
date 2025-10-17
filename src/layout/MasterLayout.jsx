import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";

const MasterLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure Flyon UI is reinitialized on each route change
    if (window.HSStaticMethods && window.HSStaticMethods.autoInit) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="min-h-[calc(75vh-88px)] pt-20">
          <Outlet />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default MasterLayout;
