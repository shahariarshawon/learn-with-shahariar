import React, { useState } from "react";
import { Filter } from "./Filter";

const courses = [
  {
    title: "100 Days MERN Stack Development",
    desc: "Build real-world projects using React, Node.js, Express.js, MongoDB.",
    img: "https://i.postimg.cc/fTh8j8cs/image.png",
    level: "Beginner",
    category: "Fullstack",
    availability: "Available",
    price: "Paid"
  },
  {
    title: "Explore Next.js with TypeScript",
    desc: "Modern fullstack apps with Next.js and TS.",
    img: "https://i.postimg.cc/xdbmZ2Q7/image.png",
    level: "Intermediate",
    category: "Frontend",
    availability: "Upcoming",
    price: "Paid"
  },
  {
    title: "Backend with JavaScript",
    desc: "Build scalable backend APIs.",
    img: "https://i.postimg.cc/7Lg67Yw4/image.png",
    level: "Intermediate",
    category: "Backend",
    availability: "Upcoming",
    price: "Paid"
  },
  {
    title: "Backend with Golang",
    desc: "High-performance backend systems.",
    img: "https://i.postimg.cc/x8NBJqVh/image.png",
    level: "Advanced",
    category: "Backend",
    availability: "Upcoming",
    price: "Paid"
  },
  {
    title: "Master DevOps",
    desc: "CI/CD, Docker, Kubernetes, cloud.",
    img: "https://i.postimg.cc/Mpg5Htp2/7030842.jpg",
    level: "Intermediate",
    category: "DevOps",
    availability: "Upcoming",
    price: "Paid"
  },
];

const CoursesTimeline = () => {
  const [activeLevel, setActiveLevel] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const levelMatch = activeLevel === "All" || course.level === activeLevel;
    const categoryMatch = activeCategory === "All" || course.category === activeCategory;
    return levelMatch && categoryMatch;
  });

  return (
    <section className="relative max-w-7xl mx-auto py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Our Courses
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Choose your path and start building real-world skills.
        </p>
      </div>

      {/* Filters */}
      <Filter
        activeLevel={activeLevel}
        setActiveLevel={setActiveLevel}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Courses */}
      <div className="space-y-24 relative z-10">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
            data-aos-offset="200"
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
                {/* Image */}
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p className="text-gray-500">{course.desc}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#49bbbd] text-white text-sm font-medium">
                      {course.level}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                        course.availability === "Available"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {course.availability}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium">
                      {course.price}
                    </span>
                  </div>

                  {/* Explore button */}
                  <button className="mt-4 px-5 py-2 bg-[#49bbbd] text-white rounded-lg hover:opacity-90 w-max">
                    Explore 
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesTimeline;