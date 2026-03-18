import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/navlogo.png";

const Header = () => {

  const navLinks = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-item ${
            isActive ? "text-[#49bbbd] font-semibold border-b-2 border-[#49bbbd]" : ""
          }`
        }
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          `nav-item ${
            isActive ? "text-[#49bbbd] font-semibold border-b-2 border-[#49bbbd]" : ""
          }`
        }
      >
        Courses
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/success"
        className={({ isActive }) =>
          `nav-item ${
            isActive ? "text-[#49bbbd] font-semibold border-b-2 border-[#49bbbd]" : ""
          }`
        }
      >
        Success
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          `nav-item ${
            isActive ? "text-[#49bbbd] font-semibold border-b-2 border-[#49bbbd] " : ""
          }`
        }
      >
        Blogs
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `nav-item ${
            isActive ? "text-[#49bbbd] font-semibold border-b-2 border-[#49bbbd]" : ""
          }`
        }
      >
        About Us
      </NavLink>
    </li>
  </>
);

  return (
    <div className="border-b bg-white sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">

        {/* LEFT */}
        <div className="navbar-start">

          {/* MOBILE MENU */}
          <div className="dropdown">
            <div tabIndex={0} className=" lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white rounded-xl w-52 space-y-2"
            >
              {navLinks}
            </ul>
          </div>

          {/* LOGO */}
          <Link to="/">
            <img
            width={250}
              src={logo}
              alt="Learn with Shahariar"
              
            />
          </Link>

        </div>

        {/* CENTER NAV */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[#353538] gap-6 text-[16px] font-medium">
            {navLinks}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-gray-300 hover:border-[#49bbbd] hover:text-[#49bbbd] transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-xl bg-[#49bbbd] text-white hover:bg-[#1c7779] transition hidden md:inline-block"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Header;