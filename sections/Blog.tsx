import React from "react";
import { blogData } from "@/constants/blogdata";
import '@/css/blog.css';

function Blog() {
  return (
    <>
      <div className="blog-header">
        <h1 className="poppins-bold">Our Latest Stories</h1>
        <p className="text-center">
        Keep updated with Debo Engineering recently published posts.
        </p>
      </div>

      {/* blogs */}
      <div
        className="blog-boxes"
      >
        {blogData.map((box, index) => (
          <div key={index} className="blog-box">
            <img src={box.img} alt={box.title} />
            <div className="blog-box-content">
              <h2 className="dark:text-white text-xl text-black mt-4 font-bold">
                {box.title}
              </h2>
              <p className="">{box.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
