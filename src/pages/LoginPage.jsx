import React, { useState } from "react";
import loginImage from "../assets/login.jfif";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex justify-center items-center bg-base-200 min-h-screen px-6">
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl w-full bg-white md:p-15 rounded-2xl shadow-lg">

        {/* LEFT IMAGE */}
        <div className="hidden lg:block w-3/4">
          <img
            src={loginImage}
            alt="login"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full p-10 lg:w-1/2">

          <h1 className="text-4xl font-bold text-center mb-6">
            Welcome Back!
          </h1>

          {/* TOGGLE */}
          <div className="relative flex bg-[#49bbbd] rounded-full p-1 mb-8 cursor-pointer">

            {/* sliding background */}
            <div
              className={`absolute top-1 bottom-1 w-1/2 bg-[#245151] rounded-full transition-all duration-300 ${
                activeTab === "login" ? "left-1" : "left-[50%]"
              }`}
            ></div>

            <p
              onClick={() => setActiveTab("login")}
              className="flex-1 text-center z-10 text-white py-2 font-medium"
            >
              Login
            </p>

            <p
              onClick={() => setActiveTab("signup")}
              className="flex-1 text-center z-10 text-white py-2 font-medium"
            >
              Sign Up
            </p>

          </div>

          <p className="text-gray-500 text-center mb-8">
            An learning platform for the upcoming developers
          </p>

          {/* USERNAME */}
          <div className="mb-5">
            <h3 className="mb-2 font-medium">User Name</h3>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#49bbbd]"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-5 relative">
            <h3 className="mb-2 font-medium">Password</h3>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-[#49bbbd]"
            />

            {/* SHOW BUTTON */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12 text-sm text-gray-500 hover:text-[#49bbbd] hover:cursor-pointer"
            >
              {showPassword ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>}
            </button>

          </div>

          {/* REMEMBER */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <p className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </p>

            <p className="text-[#49bbbd] cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>

          {/* BUTTON */}
          <button className="w-full py-3 rounded-lg bg-[#49bbbd] text-white font-semibold hover:opacity-90 transition">
            {activeTab === "login" ? "Login" : "Sign Up"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;