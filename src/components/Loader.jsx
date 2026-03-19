import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* LOGO / TEXT */}
        <h2 className="text-2xl font-semibold text-[#49bbbd]">
          Learn With Shahariar
        </h2>

        {/* ANIMATED DOTS */}
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-[#49bbbd] rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-[#49bbbd] rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-3 h-3 bg-[#49bbbd] rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>

        <p className="text-gray-400 text-sm">
          Loading your learning experience...
        </p>

      </div>

    </div>
  );
};

export default Loader;