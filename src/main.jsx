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
import AuthLayout from "./layout/AuthLayout.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import ConfirmPassword from "./pages/Auth/ConfirmPassword.jsx";
import PasswordUpdatedSuccess from "./pages/Auth/PasswordUpdatedSuccess.jsx";
import ErrorBoundary from "./utils/ErrorBoundary.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Payment from "./pages/Payment/Payment.jsx";
const router = createBrowserRouter([
  {
    element: <MasterLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      { path: "/services/:category?", element: <Services /> }, // ✅ from home to services category

      {
        path: "/service/:id",
        element: <ServiceDetails />, // ✅ from services page to service details page
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
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/confirm-password",
        element: <ConfirmPassword />,
      },
      {
        path: "/password-updated-success",
        element: <PasswordUpdatedSuccess />,
      },
    ],
  },
  {
    path: "*",
    element: <h1 className="text-center mt-20">404 - Page Not Found</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
