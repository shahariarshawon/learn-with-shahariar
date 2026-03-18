import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 space-y-24">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Learn With Shahariar
        </h1>
        <p className="text-gray-500 text-lg">
          We are on a mission to transform beginners into job-ready developers 
          through structured learning, real-world projects, and consistent guidance.
        </p>
      </div>

      {/* MISSION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://i.postimg.cc/mrWJjxTB/na-feb-25.jpg"
          alt="mission"
          className="rounded-2xl shadow-md"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-500 mb-4">
            Most students learn tutorials but fail to build real skills. 
            Our mission is to bridge that gap.
          </p>
          <p className="text-gray-500">
            We focus on hands-on practice, structured roadmap, and real-world 
            problem solving so that you are not just learning—you are becoming 
            a developer.
          </p>
        </div>
      </div>

      {/* WHY DIFFERENT */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Why We Are Different
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Learn by Building
            </h3>
            <p className="text-gray-500 text-sm">
              Every concept comes with real-world projects. No useless theory.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              From Zero to Job Ready
            </h3>
            <p className="text-gray-500 text-sm">
              We guide you step by step from beginner level to industry-ready skills.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Community Support
            </h3>
            <p className="text-gray-500 text-sm">
              Get 24/7 help inside our Discord community with mentors and peers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Live Concept Sessions
            </h3>
            <p className="text-gray-500 text-sm">
              Weekly live sessions to clear doubts and strengthen fundamentals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Structured Roadmap
            </h3>
            <p className="text-gray-500 text-sm">
              No confusion. Clear roadmap from day 1 to 100.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Real Career Focus
            </h3>
            <p className="text-gray-500 text-sm">
              Resume, portfolio, and job preparation included.
            </p>
          </div>

        </div>
      </div>

      {/* STORY */}
      <div className="bg-[#49bbbd]/10 p-10 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">
          Our Story
        </h2>
        <p className="text-gray-600 mb-4">
          Learn With Shahariar started with a simple goal — to make learning 
          development practical and accessible.
        </p>
        <p className="text-gray-600">
          After seeing thousands of students stuck in tutorial loops, we built 
          a system focused on action, consistency, and real progress.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center bg-[#49bbbd] text-white p-12 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Journey Today
        </h2>
        <p className="mb-6">
          Don’t wait for the perfect time. Build your skills and become job ready.
        </p>
        <button className="px-6 py-3 bg-white text-[#49bbbd] font-semibold rounded-xl hover:scale-105 transition">
          Explore Courses
        </button>
      </div>

    </section>
  );
};

export default AboutUs;