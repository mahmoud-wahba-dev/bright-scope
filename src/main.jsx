import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "flyonui/flyonui.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout.jsx";
import Services from "./pages/Services/Services.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails.jsx";
const router = createBrowserRouter([
  {
    element: <MasterLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
