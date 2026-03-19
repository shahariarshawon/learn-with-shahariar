import React from "react";
import { FaBook, FaUserGraduate, FaChartLine, FaPlus } from "react-icons/fa";

const TeacherDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col p-5">
        <h2 className="text-2xl font-bold text-[#49bbbd] mb-8">Teacher Panel</h2>
        <nav className="space-y-4 text-gray-700">
          <p className="hover:text-[#49bbbd] cursor-pointer">Dashboard</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">My Courses</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Students</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Assignments</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Analytics</p>
          <p className="hover:text-[#49bbbd] cursor-pointer">Settings</p>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome, Teacher</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search courses or students..."
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
                <p className="text-gray-500 text-sm">My Courses</p>
                <h3 className="text-xl font-bold">8</h3>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaUserGraduate className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Students Enrolled</p>
                <h3 className="text-xl font-bold">320</h3>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaChartLine className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">Average Progress</p>
                <h3 className="text-xl font-bold">75%</h3>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
              <FaPlus className="text-2xl text-[#49bbbd]" />
              <div>
                <p className="text-gray-500 text-sm">New Assignments</p>
                <h3 className="text-xl font-bold">3</h3>
              </div>
            </div>

          </div>

          {/* MY COURSES TABLE */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-4">My Courses</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-gray-500 border-b">
                  <tr>
                    <th className="py-3">Course</th>
                    <th>Enrolled Students</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-3">MERN Stack Basics</td>
                    <td>50</td>
                    <td className="text-green-500">Active</td>
                    <td>
                      <button className="px-3 py-1 bg-[#49bbbd] text-white rounded-lg text-sm hover:opacity-90">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Next.js Advanced</td>
                    <td>35</td>
                    <td className="text-yellow-500">Draft</td>
                    <td>
                      <button className="px-3 py-1 bg-[#49bbbd] text-white rounded-lg text-sm hover:opacity-90">
                        Edit
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3">Backend API Design</td>
                    <td>28</td>
                    <td className="text-green-500">Active</td>
                    <td>
                      <button className="px-3 py-1 bg-[#49bbbd] text-white rounded-lg text-sm hover:opacity-90">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* STUDENT PERFORMANCE */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-4">Student Progress</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-gray-500 border-b">
                  <tr>
                    <th className="py-3">Student</th>
                    <th>Course</th>
                    <th>Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-3">John Doe</td>
                    <td>MERN Stack Basics</td>
                    <td>85%</td>
                    <td className="text-green-500">On Track</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Sarah</td>
                    <td>Next.js Advanced</td>
                    <td>60%</td>
                    <td className="text-yellow-500">Behind</td>
                  </tr>

                  <tr>
                    <td className="py-3">Alex</td>
                    <td>Backend API Design</td>
                    <td>90%</td>
                    <td className="text-green-500">On Track</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;