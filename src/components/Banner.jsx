import React from "react";
import bannerImage from "../assets/banner.jfif";

const Banner = () => {
  return (
    <section
      className="min-h-[90vh] flex items-center relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-white w-full">
        <div className="max-w-3xl">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Master <span className="text-[#49bbbd]">Web Development</span>
            <br />
            Build Real World Projects
          </h1>

          {/* description */}
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Learn modern technologies like React, Node.js, MongoDB and build
            real-world applications. Start your journey to becoming a
            professional developer today.
          </p>

          {/* SEARCH BAR */}
          <div className="bg-white p-2 rounded-xl flex items-center max-w-xl mb-8 shadow-lg">

            <input
              type="text"
              placeholder="Search courses (React, Node, MERN...)"
              className="flex-1 px-4 py-3 text-black outline-none"
            />

            <button className="bg-[#49bbbd] px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition">
              Search
            </button>

          </div>
          

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">

            <button className="px-7 py-3 bg-[#49bbbd] rounded-lg font-medium hover:opacity-90 transition">
              Start Learning
            </button>

            <button className="px-7 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
              Browse Courses
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;