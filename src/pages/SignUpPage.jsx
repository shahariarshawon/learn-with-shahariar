import React, { useState } from "react";

import signupImage from "../assets/signup.jpg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

const SignUpPage = () => {
  // login function
  const handleLogin = () => {
    toast.success("Login Successfull");
    console.log("Clicked");
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center items-center bg-base-200 min-h-screen px-6 ">
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl w-full  bg-white md:p-10 rounded-2xl shadow-lg">
        {/* LEFT IMAGE */}
        <div className="hidden lg:block w-3/4">
          <img
            src={signupImage}
            alt="login"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full p-5 lg:w-1/2">
          <h1 className="text-4xl font-bold text-center mb-6">Get Started</h1>

          {/* TOGGLE */}
          <div className="relative flex bg-[#75e0e1] rounded-full p-1 mb-8">
            <a
              href="/login"
              className="flex-1 text-center z-10 text-white  py-2 font-medium"
            >
              Login
            </a>

            <a
              href="/signup"
              className="flex-1 text-center z-10 text-white py-2 bg-[#3ba3a4] rounded-4xl font-medium"
            >
              Sign Up
            </a>
          </div>

          <p className="text-gray-500 text-center mb-8">
            An learning platform for the upcoming developers
          </p>

          {/* Email address */}
          <div className="mb-5">
            <h3 className="mb-2 font-medium">Email Address</h3>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#49bbbd]"
            />
          </div>

          {/* USERNAME */}
          <div className="mb-5">
            <h3 className="mb-2 font-medium">User Name</h3>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#49bbbd]"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-5 relative">
            <h3 className="mb-2 font-medium">Password</h3>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
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
          {/* Confirm PASSWORD */}
          <div className="mb-5 relative">
            <h3 className="mb-2 font-medium">Confirm Password</h3>

            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Enter your password again"
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

         

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg bg-[#49bbbd] text-white font-semibold hover:opacity-90 transition hover:cursor-pointer"
          >
            Login
          </button>
          {/* already have an account */}
          <p className="text-center text-gray-500 pt-2">Already have an account? <a className="text-primary" href="/login">Login</a></p>
        </div>
        
      </div>
    </div>
  );
};

export default SignUpPage;
