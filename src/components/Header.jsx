import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/navlogo.png";
import useAuth from "../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // CLOSE DROPDOWN WHEN CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // LOGOUT FUNCTION
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      setOpen(false);
    } catch (error) {
      toast.error("Logout failed");
      console.error(error);
    }
  };

  // NAV STYLE
  const navItemClass = ({ isActive }) =>
    `relative py-1 transition duration-300 
     ${
       isActive
         ? "text-[#49bbbd] font-semibold"
         : "text-gray-700 hover:text-[#49bbbd]"
     }
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-0 after:bg-[#49bbbd] 
     after:transition-all after:duration-300
     hover:after:w-full
     ${isActive ? "after:w-full" : ""}
    `;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" end className={navItemClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/courses" className={navItemClass}>
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink to="/success" className={navItemClass}>
          Success
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className={navItemClass}>
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navItemClass}>
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">
      <div className="max-w-7xl mx-auto ">
        <div className="navbar py-3">
          {/* LEFT */}
          <div className="navbar-start gap-2">
            {/* MOBILE MENU */}
            <div className="dropdown lg:hidden">
              <div tabIndex={0} className="cursor-pointer">
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul className="menu menu-sm dropdown-content mt-3 p-4 shadow-lg bg-white rounded-xl w-56 space-y-3">
                {navLinks}
              </ul>
            </div>

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-40 md:w-48" />
            </Link>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-8 text-[15px] font-medium">{navLinks}</ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-3">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                {/* USER ICON */}
                <div
                  className="flex items-center gap-3 hover:cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <div className="cursor-pointer">
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#49bbbd] hover:scale-105 transition"
                      />
                    ) : (
                      <FaUserCircle className="text-3xl text-[#49bbbd]" />
                    )}
                  </div>
                  <div>User</div>
                </div>

                {/* DROPDOWN */}
                {open && (
                  <div className="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-xl p-4 animate-fadeIn">
                    <div>
                      <p className="text-sm text-gray-600">
                        {!user.email === "shahariarshawon.dev@gmail.com"
                          ? "Student"
                          : "Admin"}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {user?.email}
                      </p>
                    </div>

                    <div className="divider my-2"></div>

                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dashboard/admin"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 text-red-500 transition hover:cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-xl border border-gray-300 hover:border-[#49bbbd] hover:text-[#49bbbd] transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-5 py-2 rounded-xl bg-[#49bbbd] text-white hover:bg-[#1c7779] transition hidden md:inline-block shadow-md"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
