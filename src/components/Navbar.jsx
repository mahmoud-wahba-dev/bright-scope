import { useEffect, useLayoutEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { t, i18n } = useTranslation();


  // Use translation keys for menu items so they can be translated dynamically
  const menuItems = [
    { key: "home", path: "/" },
    { key: "services", path: "/services" },
    { key: "about", path: "/about" },
    { key: "contact", path: "/contact" },
  ];

  useEffect(() => {
    // give the DOM a tick then reinitialize FlyonUI so the dropdown works after client routing
    const t = setTimeout(() => {
      if (
        typeof window !== "undefined" &&
        window.FlyonUI &&
        typeof window.FlyonUI.reInit === "function"
      ) {
        window.FlyonUI.reInit();
      }
    }, 120);
    return () => clearTimeout(t);
  }, []);

  return (
  <nav className="navbar px-4 sm:px-6 md:px-8 fixed left-0 top-0 z-10 rounded-box flex w-full items-center justify-between gap-2 shadow-base-300/20 shadow-sm">
      <div className="navbar-start">
        <Link className="link text-base-content link-neutral text-xl font-bold no-underline" to="/">
          <div className="flex items-center gap-2">
            <img src="./assets/imgs/global/logo.svg" alt="Bright Scope" className="h-8 sm:h-10 object-contain" />
          </div>
        </Link>
      </div>

      <div className="navbar-center max-lg:hidden">
  <ul className="menu menu-horizontal p-0 font-medium items-center">
          {Array.isArray(menuItems) && menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-normal text-base text-primary border-s-4 border-primary-dark_active rounded-none"
                      : "font-normal text-base  hover:text-primary"
                  }
                  to={item.path}
                >
                  {t(item.key)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

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
                <Link className="dropdown-item" to="#">
                  {t("home")}
                </Link>
              </li>

              <li>
                  <button
                  className="dropdown-item text-error font-semibold"
                  onClick={logout}
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

        {/* Language buttons: full label on md+, compact on small */}
        <div className="hidden md:inline-flex items-center gap-2">
          <button
            className="btn rounded-full px-4 py-2 bg-transparent border border-primary text-[#1A1A1A]"
            type="button"
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </button>
          <button
            className="btn rounded-full px-4 py-2 bg-transparent border border-primary text-[#1A1A1A]"
            type="button"
            onClick={() => i18n.changeLanguage('ar')}
          >
            AR
          </button>
        </div>

        <div className="inline-flex md:hidden gap-2">
          <button
            className="btn bg-transparent border border-primary text-[#1A1A1A] px-3 py-2"
            onClick={() => i18n.changeLanguage('ar')}
          >
            AR
          </button>
        </div>

        {/* FlyonUI dropdown markup (JS handles open/close) */}
        <div className="dropdown relative inline-flex md:hidden">
          <button
            id="dropdown-default"
            type="button"
            className="dropdown-toggle btn btn-primary"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            Menu
            <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
          </button>

          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            {Array.isArray(menuItems) && menuItems.map((item, idx) => (
              <li key={idx}>
                <NavLink className="dropdown-item" to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            ))}
            {!isAuthenticated ? (
              <div className="mt-4 px-4">
                <Link
                  to="/login"
                  className="btn px-6 btn-primary w-full text-center"
                >
                  <span className="">{t("login")}</span>
                  <span className="icon-[tabler--arrow-right] rtl:rotate-180"></span>
                </Link>
              </div>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
