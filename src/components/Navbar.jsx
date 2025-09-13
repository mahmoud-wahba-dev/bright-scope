import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <nav class="navbar absolute start-0 top-0 z-1 rounded-box flex w-full items-center justify-between gap-2 shadow-base-300/20 shadow-sm">
      <div class="navbar-start">
        <Link
          class="link text-base-content link-neutral text-xl font-bold no-underline"
          to="/"
        >
          <div className="flex items-center gap-1">
            <img src="./assets/imgs/global/logo.svg" alt="" />
          </div>
        </Link>
      </div>
      <div class="navbar-center max-lg:hidden">
        <ul class="menu menu-horizontal p-0 font-medium">
          {/* <li>
              <NavLink className="font-normal text-base text-primary" to="/">Home</NavLink>
            </li> */}
          {menuItems.map((item, index) => {
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
      <div class="navbar-end items-center gap-4">
        <Link
          class="btn rounded-[56px] px-6 xxl:px-20 py-6 btn-primary max-md:hidden"
          to="#"
        >
          <span class="">Login</span>
          <span class="icon-[tabler--arrow-right] rtl:rotate-180"></span>
        </Link>

        <button
          class="btn rounded-[56px] xl:px-20 py-6 bg-transparent border border-primary text-[#1A1A1A] max-sm:hidden"
          to="#"
        >
          English | Arabic
        </button>

        
        <button
          class="btn    bg-transparent border border-primary text-[#1A1A1A] sm:hidden"
          to="#"
        >
          Ar
        </button>

        <div class="dropdown relative inline-flex md:hidden">
          <button
            id="dropdown-default"
            type="button"
            class="dropdown-toggle btn btn-text btn-secondary btn-square"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span class="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
            <span class="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
          </button>
          <ul
            class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            <li>
              <NavLink class="dropdown-item" to="#">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink class="dropdown-item" to="#">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink class="dropdown-item" to="#">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink class="dropdown-item" to="#">
                Contact Us
              </NavLink>
            </li>
            <div className="mt-4">
              <Link class="btn  px-6 btn-primary" to="#">
                <span class="">Login</span>
                <span class="icon-[tabler--arrow-right] rtl:rotate-180"></span>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
