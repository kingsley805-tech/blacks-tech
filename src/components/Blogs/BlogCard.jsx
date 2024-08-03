import React from "react";

const BlogCard = ({ Img1 }) => {
  return (
    <div>
      <div
        id="card"
        className="mx-2 mb-7 rounded-lg p-4 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-xl borderz"
      >
        <div className="overflow-hidden rounded-lg borderz">
          <img
            src={Img1}
            alt="No image"
            className="mx-auto h-[250px] w-full borderz object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="space-y-3 py-3">
          <h1 className="line-clamp-1 text-xl font-bold">
            How to grow your business. How to grow your business.
          </h1>
          <p className="line-clamp-2">
          Growing a business involves multiple strategies and considerations, ranging from improving your product or service to expanding your customer base and increasing revenue streams. Here are some key steps to consider when looking to grow your business
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
