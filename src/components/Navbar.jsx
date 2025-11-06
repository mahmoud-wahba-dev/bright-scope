import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    { key: "home", path: "/" },
    { key: "services", path: "/services" },
    { key: "about", path: "/about" },
    { key: "contact", path: "/contact" },
  ];

  // useEffect(() => {
  //   // ✅ نعمل إعادة تهيئة FlyonUI أول ما الـ Navbar يتركّب فعليًا
  //   const initDropdown = () => {
  //     if (
  //       typeof window !== "undefined" &&
  //       window.FlyonUI &&
  //       typeof window.FlyonUI.reInit === "function"
  //     ) {
  //       window.FlyonUI.reInit();
  //     }
  //   };

  //   // ✅ استدعاء مباشر بعد أول render
  //   initDropdown();

  //   // ✅ كمان نرجع نعمل reInit بعد أي reflow بسيط
  //   const timeout = setTimeout(initDropdown, 300);

  //   return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    const init = () => {
      if (
        typeof window !== "undefined" &&
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit(["dropdown"]);
        console.log("FlyonUI autoInit dropdown called");
      }
    };

    init();
    const unlisten = navigate((location) => {
      setTimeout(init, 50);
    });

    return () => {
      if (typeof unlisten === "function") unlisten();
    };
  }, [navigate, i18n.language]);

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar px-4 sm:px-6 md:px-8 fixed left-0 top-0 z-10 rounded-box flex w-full items-center justify-between gap-2 shadow-base-300/20 shadow-sm bg-white/80 backdrop-blur-md">
        {/* Left - Logo */}
        <div className="navbar-start">
          <Link
            className="link text-base-content link-neutral text-xl font-bold no-underline"
            to="/"
          >
            <div className="flex items-center gap-2">
              <img
                src="./assets/imgs/global/logo.svg"
                alt="Bright Scope"
                className="h-8 sm:h-10 object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Center - Menu */}
        <div className="navbar-center max-lg:hidden">
          <ul className="menu menu-horizontal p-0 font-medium items-center">
            {menuItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-normal text-base text-primary border-s-4 border-primary-dark_active rounded-none"
                      : "font-normal text-base hover:text-primary"
                  }
                  to={item.path}
                >
                  {t(item.key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - User + Language */}
        <div className="navbar-end items-center gap-4">
          {isAuthenticated ? (
            <div className="dropdown relative inline-flex">
              <button
                id="dropdown-avatar"
                type="button"
                className="dropdown-toggle btn btn-outline btn-primary flex items-center gap-2 rounded-full"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="User menu"
              >
                <div className="avatar">
                  <div className="size-6 rounded-full">
                    <img
                      src={
                        user?.avatar ||
                        "https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png"
                      }
                      alt={user?.name || "User Avatar"}
                    />
                  </div>
                </div>
                {user?.name?.split(" ")[0] || t("login")}
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
              </button>

              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-avatar"
              >
                <li className="dropdown-header gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          user?.avatar ||
                          "https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png"
                        }
                        alt={user?.name || "User Avatar"}
                      />
                    </div>
                  </div>
                  <div>
                    <h6 className="text-base-content text-base font-semibold">
                      {user?.name || t("login")}
                    </h6>
                    <small className="text-base-content/50 text-sm font-normal">
                      {user?.email || "user@example.com"}
                    </small>
                  </div>
                </li>

                <li>
                  <Link className="dropdown-item" to="/">
                    {t("home")}
                  </Link>
                </li>

                <li>
                  <button
                    className="dropdown-item text-error font-semibold"
                    onClick={() => setShowLogoutModal(true)}
                  >
                    {t("logout")}
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              className="hidden md:inline-flex btn rounded-full px-4 sm:px-6 py-2 sm:py-3 btn-primary items-center"
              to="/login"
            >
              <span>{t("login")}</span>
              <span className="icon-[tabler--arrow-right] rtl:rotate-180 ml-2"></span>
            </Link>
          )}

          {/* Language Switch */}
          <div className="hidden md:inline-flex items-center gap-2">
            <button
              className="btn rounded-full px-4 py-2 bg-transparent border border-primary text-[#1A1A1A]"
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
            <button
              className="btn rounded-full px-4 py-2 bg-transparent border border-primary text-[#1A1A1A]"
              onClick={() => i18n.changeLanguage("ar")}
            >
              AR
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-center transform scale-95 animate-zoomIn">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
              {t("Are you sure you want to log out?")}
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmLogout}
                className="btn btn-error text-white px-6"
              >
                {t("Yes, Logout")}
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="btn btn-outline px-6"
              >
                {t("Cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
