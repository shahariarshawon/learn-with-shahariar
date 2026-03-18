import React from "react";
import { FaChalkboardTeacher, FaDiscord, FaRocket } from "react-icons/fa";

const WhyOurCourses = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Our Courses?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We focus on real learning, not just watching videos. Our goal is to make you job-ready with proper guidance and support.
        </p>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* 1. Guided Practice */}
        <div data-aos="fade-up" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center group">
          <div className="text-4xl text-[#49bbbd] mb-4 group-hover:scale-110 transition">
            <FaRocket />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Practice From Basic to Job Ready
          </h3>
          <p className="text-gray-500 text-sm">
            You won’t just watch tutorials. You will practice with me step by step, starting from the basics and progressing toward real-world job-ready skills.
          </p>
        </div>

        {/* 2. Discord Support */}
        <div data-aos="fade-up" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center group">
          <div className="text-4xl text-[#49bbbd] mb-4 group-hover:scale-110 transition">
            <FaDiscord />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            24/7 Community Support
          </h3>
          <p className="text-gray-500 text-sm">
            Get help anytime through our dedicated Discord channel. Ask questions, share progress, and grow with a supportive community.
          </p>
        </div>

        {/* 3. Live Sessions */}
        <div data-aos="fade-up" className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center group">
          <div className="text-4xl text-[#49bbbd] mb-4 group-hover:scale-110 transition">
            <FaChalkboardTeacher />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Live Conceptual Sessions
          </h3>
          <p className="text-gray-500 text-sm">
            Stuck on something? We’ll have live sessions to deeply explain complex topics and clear your confusion.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyOurCourses;