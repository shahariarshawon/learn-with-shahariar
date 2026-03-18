import React from "react";

const CallToAction = () => {
  return (
    <section data-aos="fade-right" className="mt-20 py-20 bg-linear-to-r from-[#49bbbd] to-[#3ba3a4] text-white">
      
      <div className="max-w-4xl mx-auto text-center px-6">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Don’t wait for your last semester.
          <br />
          Start your journey now.
        </h2>

        {/* SUBTEXT */}
        <p className="text-lg md:text-xl opacity-90 mb-10">
          Most students start too late and struggle to get internships.
          Build your skills early, stay ahead, and become job-ready before it even matters.
        </p>

        {/* BUTTON */}
        <button className="px-8 py-4 bg-white text-[#49bbbd] font-semibold rounded-xl text-lg hover:scale-105 hover:shadow-lg transition duration-300">
          Practice With Me
        </button>

      </div>

    </section>
  );
};

export default CallToAction;