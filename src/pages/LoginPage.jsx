import React from "react";
import loginImage from "../assets/login.png";

const LoginPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen px-6">
      <div className="hero-content flex-col lg:flex-row gap-12 max-w-6xl items-stretch">

        {/* LEFT IMAGE */}
        <div className="flex-1">
          <img
            src={loginImage}
            alt="login"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1  p-10 rounded-2xl ">

          <h1 className="text-4xl font-bold text-center mb-6">
            Welcome Back!
          </h1>

          <div className="flex justify-between bg-[#49bbbd] rounded-full p-1 mb-8">
            <p className="bg-[#245151] text-white rounded-full px-10 py-2 font-medium">
              Login
            </p>
            <p className="text-white px-10 py-2 font-medium">
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
          <div className="mb-5">
            <h3 className="mb-2 font-medium">Password</h3>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#49bbbd]"
            />
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
            Login
          </button>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;