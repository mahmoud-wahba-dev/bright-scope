import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const MasterLayout = () => {
    const location = useLocation();

  useEffect(() => {
    // Ensure Flyon UI is reinitialized on each route change
    if (window.HSStaticMethods && window.HSStaticMethods.autoInit) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

    useEffect(() => {
    // Dynamically load the Iconify runtime
    const script = document.createElement("script");
    script.src = "https://code.iconify.design/3/3.1.1/iconify.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(75vh-88px)] pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
