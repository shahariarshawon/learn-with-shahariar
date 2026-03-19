import React from "react";
import { FaUsers, FaBook, FaDollarSign, FaChartLine } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col p-5">
        <h2 className="text-2xl font-bold text-[#49bbbd] mb-8">
          Admin Panel
        </h2>

        <nav className="space-y-4 text-gray-700">
          <p className="hover:text-[#49bbbd] cursor-pointer">Dashboard</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Users</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Courses</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Payments</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Analytics</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Settings</p>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard Overview</h1>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-3 py-2 text-sm"
            />
            <div className="w-10 h-10 bg-[#49bbbd] rounded-full"></div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6 space-y-6">

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6">
            
            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaUsers className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Total Users</p>
                <h3 className="text-xl font-bold">1,240</h3>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaBook className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Courses</p>
                <h3 className="text-xl font-bold">12</h3>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaDollarSign className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Revenue</p>
                <h3 className="text-xl font-bold">$4,200</h3>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaChartLine className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Growth</p>
                <h3 className="text-xl font-bold">+18%</h3>
              </div>
            </div>

          </div>

          {/* RECENT USERS TABLE */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Users</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-gray-500 border-b">
                  <tr>
                    <th className="py-3">Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-3">John Doe</td>
                    <td>john@gmail.com</td>
                    <td>Student</td>
                    <td className="text-green-500">Active</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Sarah</td>
                    <td>sarah@gmail.com</td>
                    <td>Teacher</td>
                    <td className="text-green-500">Active</td>
                  </tr>

                  <tr>
                    <td className="py-3">Alex</td>
                    <td>alex@gmail.com</td>
                    <td>Student</td>
                    <td className="text-red-500">Blocked</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* COURSE MANAGEMENT */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-4">Manage Courses</h2>

            <div className="flex gap-4 flex-wrap">
              <button className="px-4 py-2 bg-[#49bbbd] text-white rounded-lg">
                Add Course
              </button>

              <button className="px-4 py-2 border rounded-lg">
                View All
              </button>

              <button className="px-4 py-2 border rounded-lg">
                Pending Approval
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;