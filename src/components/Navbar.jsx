import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: "home", path: "/" },
    { key: "services", path: "/services" },
    { key: "about", path: "/about" },
    { key: "contact", path: "/contact" },
  ];

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="navbar fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md shadow-sm px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            className="text-xl font-bold text-primary flex items-center gap-2"
            to="/"
          >
            <img
              src="/logo.svg"
              alt="Bright Scope"
              className="h-8 sm:h-10 object-contain"
            />
          </Link>
        </div>

        {/* Menu - Desktop */}
        <div className="hidden lg:flex justify-center flex-1">
          <ul className="flex items-center justify-center gap-12 font-medium">
            {menuItems.map((item) => (
              <li key={item.key}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary transition"
                  }
                >
                  {t(item.key)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 border border-primary text-primary rounded-full px-4 py-1.5 hover:bg-primary/5 transition"
              >
                <div className="avatar">
                  <div className="w-7 rounded-full">
                    <img
                      src={
                        user?.avatar ||
                        "https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png"
                      }
                      alt="user"
                    />
                  </div>
                </div>
                <span>{user?.name?.split(" ")[0]}</span>
                <span
                  className={`icon-[tabler--chevron-down] size-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                ></span>
              </button>

              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 animate-fadeIn">
                  <li className="px-4 py-3 border-b border-gray-100 text-left">
                    <p className="font-semibold text-gray-800 break-all">
                      {user?.name || ""}
                    </p>
                    <p className="text-sm text-gray-500 break-all max-w-[220px] truncate">
                      {user?.email || ""}
                    </p>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setShowLogoutModal(true);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-error hover:bg-red-50 font-medium rounded-b-2xl"
                    >
                      {t("logout")}
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary rounded-full px-6 py-2"
            >
              {t("login")}
            </Link>
          )}

          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
            }
            className="btn btn-outline rounded-full px-4"
          >
            {i18n.language === "en" ? "AR" : "EN"}
          </button>
        </div>

        {/* Right - Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Language */}
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
            }
            className="btn btn-outline rounded-full px-3 py-1 text-sm"
          >
            {i18n.language === "en" ? "AR" : "EN"}
          </button>

          {/* Auth - Mobile */}
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 border border-primary text-primary rounded-full px-3 py-1.5"
              >
                <div className="avatar">
                  <div className="w-6 rounded-full">
                    <img
                      src={
                        user?.avatar ||
                        "https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png"
                      }
                      alt="user"
                    />
                  </div>
                </div>
                <span className="text-sm font-medium">
                  {user?.name?.split(" ")[0]}
                </span>
                <span
                  className={`icon-[tabler--chevron-down] size-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                ></span>
              </button>

              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-2xl shadow-lg z-50 animate-fadeIn text-left">
                  <li className="px-4 py-3 border-b border-gray-100">
                    <p className="font-semibold text-gray-800 break-all">
                      {user?.name || ""}
                    </p>
                    <p className="text-sm text-gray-500 break-all max-w-[230px] truncate">
                      {user?.email || ""}
                    </p>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setShowLogoutModal(true);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-error hover:bg-red-50 font-medium rounded-b-2xl"
                    >
                      {t("logout")}
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary rounded-full px-4 py-1.5 text-sm"
            >
              {t("login")}
            </Link>
          )}

          {/* Menu Toggle */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsDropdownOpen(false);
            }}
            className="text-primary"
          >
            <span
              className={`icon-[tabler--${
                isMobileMenuOpen ? "x" : "menu-2"
              }] size-9 transition-all mt-1`}
            ></span>
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-20 animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="fixed top-[64px] left-0 w-full bg-white rounded-b-2xl shadow-xl z-30 transition-all duration-300 animate-slideDown">
            <ul className="flex flex-col items-center gap-4 px-6 py-6 text-center">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold block py-2 text-lg"
                        : "text-gray-700 hover:text-primary block py-2 text-lg transition"
                    }
                  >
                    {t(item.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* ✅ Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
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
