import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
      
      {/* IMAGE */}
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
      />

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-2">{blog.date}</p>

        <h3 className="text-lg font-semibold mb-2">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          {blog.desc}
        </p>

        <button className="btn text-[#49bbbd] font-medium ">
          Read More
        </button>
      </div>

    </div>
  );
};

export default BlogCard;