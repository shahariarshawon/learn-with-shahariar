"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import loginImage from "@/app/public/login-image.png";
import googleIcon from "@/app/public/google-icon.png";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+880");

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#ffe6c8] px-4">
      {/* Main Card */}
      <div className="w-full max-w-6xl bg-white p-4 shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[3fr_2fr] transition-all duration-500">
        {/* Left Side - Image */}
        <div className="relative hidden md:block">
          <Image
            src={loginImage}
            alt="Login Illustration"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <motion.div className="p-10 bg-white " variants={itemVariants}>
          {/* Heading */}
          <motion.div className="mb-6 " variants={itemVariants}>
            <h1 className="text-2xl font-semibold text-[#525252]">
              Create Your Account
            </h1>
            <p className="text-sm text-[#525252] mt-1">Join the community</p>
          </motion.div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-md ">
            <Image src={googleIcon} alt="Google" width={20} height={20} />
            Continue with Google
          </button>

          {/* Divider */}
          <motion.div
            className="flex items-center my-4 text-gray-400 text-sm"
            variants={itemVariants}
          >
            <hr className="grow border-gray-300" />
            <span className="mx-2">or continue with email</span>
            <hr className="grow border-gray-300" />
          </motion.div>

          {/* Form */}
          <motion.form className="space-y-4" variants={itemVariants}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7F265B] focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7F265B] focus:outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 focus:outline-none"
                >
                  <option value="+880">🇧🇩 +880</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input
                  type="tel"
                  placeholder="1234567890"
                  className="w-full px-4 py-2.5 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-[#7F265B] focus:outline-none transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7F265B] focus:outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7F265B] focus:outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-[#7F265B]" />
              <p className="text-sm text-gray-600">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-[#7F265B] font-medium hover:underline"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full py-2.5 bg-[#7F265B] text-white rounded-lg font-medium hover:bg-[#7F265B]/80 transition"
            >
              Sign Up
            </button>
          </motion.form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-[#7F265B] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
