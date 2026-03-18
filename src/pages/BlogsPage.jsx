import React from "react";
import BlogCard from "../components/BlogCard";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Why MERN Stack is Still Powerful in 2026",
      desc: "Learn why MERN stack remains one of the best choices for fullstack development.",
      img: "https://i.postimg.cc/fTh8j8cs/image.png",
      date: "March 10, 2026",
    },
    {
      id: 2,
      title: "Frontend vs Backend: What Should You Learn?",
      desc: "Confused between frontend and backend? Here's a simple breakdown.",
      img: "https://i.postimg.cc/xdbmZ2Q7/image.png",
      date: "March 5, 2026",
    },
    {
      id: 3,
      title: "How to Become Job Ready Developer",
      desc: "Step-by-step roadmap to become job ready in web development.",
      img: "https://i.postimg.cc/7Lg67Yw4/image.png",
      date: "Feb 28, 2026",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Blogs
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Insights, guides, and tips to help you grow as a developer.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

    </section>
  );
};

export default BlogsPage;