import React from "react";
import { FiAward } from "react-icons/fi";

const Success = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 text-center">
      
      {/* HEADER */}
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Our Success Stories
      </h3>

      <p className="text-gray-500 mb-12 max-w-xl mx-auto">
        We are building future developers. Your success story could be the first one featured here.
      </p>

      {/* EMPTY STATE CARD */}
      <div className="bg-white rounded-2xl shadow-md p-10 max-w-2xl mx-auto border border-dashed border-gray-300">
        
        {/* ICON */}
        <div className="flex justify-center mb-5">
          <div className="bg-[#49bbbd]/20 p-4 rounded-full text-[#49bbbd] text-3xl">
            <FiAward />
          </div>
        </div>

        {/* MESSAGE */}
        <h4 className="text-xl font-semibold mb-3">
          No Success Stories Yet
        </h4>

        <p className="text-gray-500 mb-6">
          Be the first to complete the journey and land an opportunity.
        </p>

        {/* HIGHLIGHT MESSAGE */}
        <p className="text-lg font-medium text-[#49bbbd]">
          🚀 Be the first to write your name here
        </p>

      </div>

      

    </section>
  );
};

export default Success;