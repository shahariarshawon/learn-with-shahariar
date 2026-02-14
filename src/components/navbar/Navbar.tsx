"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import navLogo from "../assets/navlogo.png"; // fixed typo: "assests" → "assets"

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
          <div className="shrink-0">
            <Link href="/">
              <Image src={navLogo} alt="Logo" width={250} height={100} />
            </Link>
          </div>

          {/* Middle - Nav Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-700 font-medium group hover:text-violet-500"
              >
                {link.name}
                {/* Fancy underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-violet-500 transition-all duration-300 group-hover:w-full "></span>
              </Link>
            ))}
          </div>

          {/* Right - Buttons */}
          <div className="hidden md:flex space-x-4">
            {/* Login Button */}
            <Link href="/login">
              <Button
                variant="outline"
                className="relative overflow-hidden group transition-all duration-300 hover:bg-violet-500 hover:text-white hover:shadow-lg"
              >
                <span className="relative z-10">Login</span>
                <span className="absolute left-0 top-0 w-0 h-full bg-violet-500 transition-all duration-300 group-hover:w-full z-0"></span>
              </Button>
            </Link>

            {/* Enroll Now Button */}
            <Link href="/enroll">
              <Button
                variant="default"
                className="relative overflow-hidden group transition-all duration-300 hover:bg-white hover:text-violet-600 hover:shadow-xl"
              >
                <span className="relative z-10">Enroll Now</span>
                <span className="absolute left-0 top-0 w-0 h-full bg-violet-100 transition-all duration-300 group-hover:w-full z-0"></span>
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
                  className="text-gray-700 hover:text-violet-500 font-medium transition-colors"
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
