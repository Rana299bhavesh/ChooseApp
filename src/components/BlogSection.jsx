import React from "react";

const BlogSection = () => {
  return (
    <div className="relative w-full h-[350px]">
      {/* Background Image */}
      <img
        src="/Images/blog_bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <div className="max-w-xl text-white space-y-6">
          <h2 className="text-4xl font-bold">Our Blog</h2>
          <p className="text-lg">
            Latest news, updates, and media coverage about ChooseApp. Stay
            informed and connected with ChooseApp as we drive innovation and
            convenience in the world of commuting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
