import React, { useEffect } from "react";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-black  text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 borz shadow-lg transition-all duration-500 hover:shadow-xl   "
          >
            <div className="overflow-hidden borderz">
              <img
                src={Img1}
                alt="No image"
                className="mx-auto h-[250px] borderz w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-black font-medium">
              <p>April 24, 2024</p>
              <p className="line-clamp-1"> By Astro</p>
            </div>
            <div className="space-y-3 py-3 font text-black font-medium">
              <h1 className="line-clamp-1 text-xl font-bold">
                How to grow your business. 
              </h1>
              <p className="line-clamp-2">
              Growing a business involves multiple strategies and considerations, ranging from improving your product or service to expanding your customer base and increasing revenue streams. Here are some key steps to consider when looking to grow your business
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 borz shadow-lg transition-all duration-200 hover:shadow-xl "
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover borderz transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-black font-medium">
              <p>Jan 3, 2023</p>
              <p className="line-clamp-1"> By Akshay</p>
            </div>
            <div className="space-y-3 py-3 text-black font-medium">
              <h1 className="line-clamp-1 text-xl font-bold">
                How to grow digital marketing. 
              </h1>
              <p className="line-clamp-2">
              It involves multiple strategies and considerations, ranging from improving your product or service to expanding your customer base and increasing revenue streams. Here are some key steps to consider when looking to grow your business
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 borz shadow-lg transition-all duration-200 hover:shadow-xl k:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img3}
                alt="No image"
                className="mx-auto h-[250px] w-full borderz object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-black font-medium">
              <p className="text-black font-medium">April 24, 2022</p>
              <p className="line-clamp-1 text-black font-medium"> By Sat</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl text-black font-bold">
                How to handle systems. 
              </h1>
              <p className="line-clamp-2 text-black font-medium">
              Ranging from improving your product or service to expanding your customer base and increasing revenue streams. Here are some key steps to consider when looking to grow your business
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
