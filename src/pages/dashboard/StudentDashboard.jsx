import React from "react";
import { FaBook, FaChartLine, FaAward, FaClipboardList } from "react-icons/fa";

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col p-5">
        <h2 className="text-2xl font-bold text-[#49bbbd] mb-8">Student Panel</h2>
        <nav className="space-y-4 text-gray-700">
         
          <p className="hover:text-[#49bbbd] cursor-pointer">My Courses</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Assignments</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Progress</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Leaderboard</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Back to Home</p>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome, Student</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search courses..."
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
              <FaBook className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Courses Enrolled</p>
                <h3 className="text-xl font-bold">5</h3>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaClipboardList className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Assignments Pending</p>
                <h3 className="text-xl font-bold">2</h3>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaChartLine className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Average Progress</p>
                <h3 className="text-xl font-bold">68%</h3>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaAward className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Certificates Earned</p>
                <h3 className="text-xl font-bold">1</h3>
              </div>
            </div>

          </div>

          {/* MY COURSES */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-4">My Courses</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-gray-500 border-b">
                  <tr>
                    <th className="py-3">Course</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-3">MERN Stack Basics</td>
                    <td>80%</td>
                    <td className="text-green-500">In Progress</td>
                    <td>
                      <button className="px-3 py-1 bg-[#49bbbd] text-white rounded-lg text-sm hover:opacity-90">
                        Continue
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Next.js Advanced</td>
                    <td>40%</td>
                    <td className="text-yellow-500">In Progress</td>
                    <td>
                      <button className="px-3 py-1 bg-[#49bbbd] text-white rounded-lg text-sm hover:opacity-90">
                        Continue
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3">Backend API Design</td>
                    <td>100%</td>
                    <td className="text-green-500">Completed</td>
                    <td>
                      <button className="px-3 py-1 bg-[#49bbbd] text-white rounded-lg text-sm hover:opacity-90">
                        View Certificate
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* UPCOMING ASSIGNMENTS */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-4">Upcoming Assignments</h2>
            <ul className="space-y-3">
              <li className="flex justify-between bg-gray-50 px-4 py-3 rounded-lg">
                <span>MERN Stack Project 1</span>
                <span className="text-sm text-gray-500">Due: 25 Mar</span>
              </li>
              <li className="flex justify-between bg-gray-50 px-4 py-3 rounded-lg">
                <span>Next.js Blog App</span>
                <span className="text-sm text-gray-500">Due: 28 Mar</span>
              </li>
            </ul>
          </div>

        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;