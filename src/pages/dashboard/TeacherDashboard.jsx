import React from "react";
import {
  FaUsers,
  FaBook,
  FaDollarSign,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";
import { IoHomeSharp, IoSettings } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { Link, NavLink } from "react-router";

{
  /* ITEM */
}
const menuItems = [
  {
    name: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/dashboard/admin",
  },
  {
    name: "My Course",
    icon: <FaBook />,
    path: "/dashboard/admin/courses",
  },
  {
    name: "Students",
    icon: <FaUsers />,
    path: "/dashboard/admin/users",
  },
  {
    name: "All Lectures",
    icon: <FaBook />,
    path: "/dashboard/admin/classes",
  },
  {
    name: "Leaderboard",
    icon: <FaTrophy />,
    path: "/dashboard/admin/leaderboard",
  },
  {
    name: "Make Announcements",
    icon: <TfiAnnouncement />,
    path: "/dashboard/admin/announcements",
  },
  {
    name: "Back to Home",
    icon: <IoHomeSharp />,
    path: "/",
  },
];

const TeacherDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4 w-full text-2xl font-semibold text-center">
              Welcome Teacher
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-4">Page Content</div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `
        flex items-center gap-3 px-3 py-3 mb-2 rounded-lg
        transition-all duration-200
        is-drawer-close:tooltip is-drawer-close:tooltip-right
        ${
          isActive
            ? "bg-[#49bbbd] text-white"
            : "text-gray-700 hover:bg-[#49bbbd]/10 hover:text-[#49bbbd]"
        }
        `
                    }
                    data-tip={item.name}
                  >
                    {/* ICON */}
                    <span className="text-lg">{item.icon}</span>

                    {/* TEXT */}
                    <span className="is-drawer-close:hidden text-sm font-medium">
                      {item.name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
