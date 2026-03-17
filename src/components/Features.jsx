import React from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiBarChart2,
  FiAward,
  FiLayout,
  FiClipboard,
  FiTrendingUp,
} from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiBookOpen />,
      title: "Structured Module Learning",
      desc: "Classes are delivered in modules with a consistent one-day gap for better retention.",
    },
    {
      icon: <FiClipboard />,
      title: "Practice & Quizzes",
      desc: "Each class includes hands-on practice and quizzes to reinforce learning.",
    },
    {
      icon: <FiCalendar />,
      title: "Class Schedule",
      desc: "New classes are released every Saturday, Monday, and Wednesday.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Assignment Days",
      desc: "Thursday and Friday are dedicated to completing assignments.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Weekly Evaluation",
      desc: "At the end of each week, assignments help measure your progress.",
    },
    {
      icon: <FiAward />,
      title: "Marking System",
      desc: "Assignments carry 50 marks and quizzes carry 10 marks for evaluation.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Leaderboard",
      desc: "Track your ranking among peers and stay motivated.",
    },
    {
      icon: <FiLayout />,
      title: "Student Dashboard",
      desc: "Manage your progress, access classes, and monitor performance easily.",
    },
  ];

  return (
    <section data-aos="fade-left" className="max-w-7xl mx-auto px-4 py-16">
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Platform Features
        </h3>
        <p className="text-gray-500 max-w-xl mx-auto">
          A structured and practical learning system designed to make you job-ready.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
          >
            
            {/* ICON */}
            <div className="text-3xl text-[#49bbbd] mb-4 group-hover:scale-110 transition">
              {feature.icon}
            </div>

            {/* TITLE */}
            <h4 className="text-lg font-semibold mb-2">
              {feature.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {feature.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;