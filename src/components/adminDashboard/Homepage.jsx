import React from "react";
import { FaUsers, FaBook, FaDollarSign, FaChartLine } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="space-y-6">

      {/* 🔥 HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome Admin 👋
        </h1>
        <p className="text-gray-500 text-sm">
          Here's what's happening today
        </p>
      </div>

      {/* 📊 STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-[#49bbbd]/10 text-[#49bbbd] rounded-lg">
            <FaUsers size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <h3 className="text-xl font-bold">1,240</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-[#49bbbd]/10 text-[#49bbbd] rounded-lg">
            <FaBook size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Courses</p>
            <h3 className="text-xl font-bold">32</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-[#49bbbd]/10 text-[#49bbbd] rounded-lg">
            <FaDollarSign size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Revenue</p>
            <h3 className="text-xl font-bold">$8,450</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-[#49bbbd]/10 text-[#49bbbd] rounded-lg">
            <FaChartLine size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Growth</p>
            <h3 className="text-xl font-bold text-green-500">+18%</h3>
          </div>
        </div>

      </div>

      {/* 📋 MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 📄 RECENT USERS */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Recent Users
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="py-3">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-3">John Doe</td>
                  <td>john@gmail.com</td>
                  <td className="text-green-500">Active</td>
                </tr>

                <tr className="border-b">
                  <td className="py-3">Sarah</td>
                  <td>sarah@gmail.com</td>
                  <td className="text-green-500">Active</td>
                </tr>

                <tr>
                  <td className="py-3">Alex</td>
                  <td>alex@gmail.com</td>
                  <td className="text-red-500">Blocked</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ⚡ QUICK ACTIONS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Quick Actions
          </h2>

          <div className="flex flex-col gap-3">
            <button className="bg-[#49bbbd] text-white py-2 rounded-lg hover:opacity-90 transition">
              Add Course
            </button>

            <button className="border py-2 rounded-lg hover:bg-gray-100 transition">
              Manage Users
            </button>

            <button className="border py-2 rounded-lg hover:bg-gray-100 transition">
              View Reports
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homepage;