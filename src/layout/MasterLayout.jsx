import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
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
