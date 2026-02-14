"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import navLogo from "../assets/navlogo.png";
import notificationIcon from "@/app/public/notification.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Course Details", href: "/courses" },
    { name: "Student Feedback", href: "/feedback" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <div className="shrink-0 w-65">
            <Link href="/">
              <Image src={navLogo} alt="Logo" />
            </Link>
          </div>

          {/* Middle - Nav Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-700 font-medium group hover:text-[#7F265B]"
              >
                {link.name}
                {/* Fancy underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7F265B] transition-all duration-300 group-hover:w-full "></span>
              </Link>
            ))}
          </div>

          {/* Right - Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/notification"
              className="relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-[#7F265B] "
            >
              <Image
                src={notificationIcon}
                alt="Notification"
                width={22}
                height={22}
                className="transition-transform duration-300 group-hover:animate-shake "
              />

              {/* Optional Notification Badge */}
              <span className="absolute top-[-3px] right-[-3px] w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </Link>

            {/* Login Button */}
            <Link href="/signin">
              <Button
                variant="outline"
                className="relative overflow-hidden group transition-all duration-300 hover:bg-[#7F265B] hover:text-white hover:shadow-lg"
              >
                <span className="relative z-10">Login</span>
                <span className="absolute left-0 top-0 w-0 h-full bg-[#7F265B] transition-all duration-300 group-hover:w-full z-0"></span>
              </Button>
            </Link>

            {/* Enroll Now Button */}
            <Link href="/enroll">
              <Button
                variant="default"
                className="relative overflow-hidden group transition-all duration-300 bg-[#7F265B] hover:bg-white hover:border-[#7F265B] hover:text-black hover:shadow-xl"
              >
                <span className="relative z-10">Enroll Now</span>
                <span className="absolute left-0 top-0 w-0 h-full bg-gray-200 transition-all duration-300 group-hover:w-full z-0"></span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none text-2xl"
            >
              {isOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="px-4 pt-2 pb-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#7F265B] font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/login">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/enroll">
                <Button variant="default" className="w-full">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
