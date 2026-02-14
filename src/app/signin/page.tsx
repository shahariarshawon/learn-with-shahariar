"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import loginImage from "@/app/public/login-image.png";
import googleIcon from "@/app/public/google-icon.png";

export default function LoginPage() {
  const [remember, setRemember] = useState(false);

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
        <div className="p-10 flex flex-col justify-center">
          {/* Header */}
          <h1 className="text-3xl font-bold text-[#525252] mb-2">
            Welcome back
          </h1>
          <p className="text-[#525252] mb-6">See what's going on</p>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-md ">
            <Image src={googleIcon} alt="Google" width={20} height={20} />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-gray-400 text-sm">
              or continue with email
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F265B] transition-all duration-300"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F265B] transition-all duration-300"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="accent-[#7F265B]"
              />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-[#7F265B] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button className="w-full bg-[#7F265B] text-white py-3 rounded-lg font-semibold hover:bg-[#7F265B]/80 transition-all duration-300 hover:shadow-lg active:scale-95">
            Login
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link href="/enroll" className="text-[#7F265B] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
