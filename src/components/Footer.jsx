import React from "react";
import logo from "../assets/navlogo.png";
import { FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  mt-20">
      
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* LOGO + DESCRIPTION */}
        <div>
          <img src={logo} alt="Learn With Shahariar" className="w-40 mb-4"/>
          <p className="text-sm leading-relaxed">
            Learn modern web development with practical projects and real
            industry knowledge. Start your journey to becoming a professional
            developer today.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className=" font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#49bbbd] cursor-pointer">About Us</li>
            <li className="hover:text-[#49bbbd] cursor-pointer">Careers</li>
            <li className="hover:text-[#49bbbd] cursor-pointer">Success Stories</li>
            <li className="hover:text-[#49bbbd] cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className=" font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#49bbbd] cursor-pointer">Help Center</li>
            <li className="hover:text-[#49bbbd] cursor-pointer">Guides</li>
            <li className="hover:text-[#49bbbd] cursor-pointer">Community</li>
            <li className="hover:text-[#49bbbd] cursor-pointer">Updates</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className=" font-semibold mb-4">
            Get Course Updates
          </h3>

          <p className="text-sm mb-4">
            Subscribe to receive new course notifications and learning tips.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg text-black outline-none border-base-400 border"
            />
            <button className="bg-[#49bbbd] px-4 rounded-r-lg  hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
          <div>
            
    <div className="pt-5 grid grid-flow-col">
      <a className="hover:cursor-pointer">
        
          <FaDiscord size={24}></FaDiscord>
      
      </a>
      <a>
        <FaYoutube size={24}></FaYoutube>
      </a>
      <a >
        <FaFacebook size={24}></FaFacebook>
      </a>
    </div>
          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm">
            © {new Date().getFullYear()} Learn With Shahariar. All rights reserved.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;