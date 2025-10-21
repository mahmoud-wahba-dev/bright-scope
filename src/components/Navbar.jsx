import { useEffect, useLayoutEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();


  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
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
    <nav className="navbar px-8 fixed start-0 top-0 z-10 rounded-box flex w-full items-center justify-between gap-2 shadow-base-300/20 shadow-sm">
      <div className="navbar-start">
        <Link
          className="link text-base-content link-neutral text-xl font-bold no-underline"
          to="/"
        >
          <div className="flex items-center gap-1">
            <img src="./assets/imgs/global/logo.svg" alt="" />
          </div>
        </Link>
      </div>

      <div className="navbar-center max-lg:hidden">
        <ul className="menu menu-horizontal p-0 font-medium">
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
                  {item.name}
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
              {user?.name?.split(" ")[0] || "User"}
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
                    {user?.name || "User"}
                  </h6>
                  <small className="text-base-content/50 text-sm font-normal">
                    {user?.email || "user@example.com"}
                  </small>
                </div>
              </li>

              <li>
                <Link className="dropdown-item" to="#">
                  My Profile
                </Link>
              </li>

              <li>
                <button
                  className="dropdown-item text-error font-semibold"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            className="btn rounded-[56px] px-6 xxl:px-20 py-6 btn-primary max-md:hidden"
            to="/login"
          >
            <span>Login</span>
            <span className="icon-[tabler--arrow-right] rtl:rotate-180"></span>
          </Link>
        )}

        <button
          className="btn rounded-[56px] xl:px-20 py-6 bg-transparent border border-primary text-[#1A1A1A] max-sm:hidden"
          type="button"
        >
          English | Arabic
        </button>

        <button
          className="btn bg-transparent border border-primary text-[#1A1A1A] sm:hidden"
          type="button"
        >
          Ar
        </button>

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
                  <span className="">Login</span>
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
