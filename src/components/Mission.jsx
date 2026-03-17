import React from "react";
import { FiTarget, FiTrendingUp } from "react-icons/fi";

const Mission = () => {
  return (
    <section data-aos="fade-left" className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Our Mission
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We aim to simplify your journey into tech by giving you the right skills at the right time.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-[#49bbbd] text-3xl mb-4">
              <FiTrendingUp />
            </div>

            <h4 className="text-xl font-semibold mb-3">
              Web Development is No Longer Optional
            </h4>

            <p className="text-gray-500 leading-relaxed">
              In today’s AI-driven world, web development has become a fundamental skill.
              No matter which field you choose, having a strong understanding of how the web works
              gives you a powerful advantage.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-[#49bbbd] text-3xl mb-4">
              <FiTarget />
            </div>

            <h4 className="text-xl font-semibold mb-3">
              Be Ready Before It’s Too Late
            </h4>

            <p className="text-gray-500 leading-relaxed">
              Many students struggle during their final semester trying to secure an internship.
              Our mission is to prepare you early, so you don’t face that pressure later.
              With the right guidance, you can build real skills and become job-ready ahead of time.
            </p>
          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="text-center mt-14">
          <p className="text-lg font-medium text-[#49bbbd]">
            We are here to guide you, so you don’t have to struggle alone.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Mission;