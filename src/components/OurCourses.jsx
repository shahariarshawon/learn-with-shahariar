import React from "react";

const courses = [
  {
    title: "100 Days MERN Stack Development",
    desc: "Build real-world projects using React, Node.js,Express.js, MongoDB.",
    level: "Beginner to Advanced",
    img: "https://i.postimg.cc/fTh8j8cs/image.png",
  },
  {
    title: "Explore Next.js with TypeScript",
    desc: "Build real-world projects using React, Node.js,Express.js, MongoDB.",
    level: "Beginner to Advanced",
    img: "https://i.postimg.cc/xdbmZ2Q7/image.png",
  },
  {
    title: "Backend with JavaScript",
    desc: "Master scalable backend architecture using TypeScript.",
    level: "Intermediate",
    img: "https://i.postimg.cc/7Lg67Yw4/image.png",
  },
  {
    title: "Backend with Golang",
    desc: "High-performance backend systems with Go.",
    level: "Advanced",
    img: "https://i.postimg.cc/x8NBJqVh/image.png",
  },
  {
    title: "Master DevOps",
    desc: "CI/CD, Docker, Kubernetes, and cloud deployment.",
    level: "Intermediate",
    img: "https://i.postimg.cc/Mpg5Htp2/7030842.jpg",
  },
  
];

const OurCourses = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Popular Courses
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Learn industry-ready skills with structured courses and real-world projects.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
          >
            
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              
              {/* LEVEL BADGE */}
              <span className="text-xs bg-[#49bbbd]/20 text-[#49bbbd] px-3 py-1 rounded-full">
                {course.level}
              </span>

              <h3 className="text-lg font-semibold mt-3 mb-2">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {course.desc}
              </p>

              {/* CTA */}
              <div className="flex justify-between items-center">
                
                <p className="font-semibold text-[#49bbbd]">
                  Enroll Now
                </p>

                <button className="px-4 py-2 rounded-lg bg-[#49bbbd] text-white text-sm hover:opacity-90 transition">
                  Explore →
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default OurCourses;