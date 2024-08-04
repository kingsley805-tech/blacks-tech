import React from "react";
import BannerImg from "../../assets/marketing-speaker.png";
import Ban1 from "./ban1";
import Ban2 from "../Banner/ban2";

const Banner = () => {
  return (
    <>
    <Ban1 />
    <Ban2 />
    <main className="bg-black w-screen container">
      
      <section data-aos="fade-up" className="container py-8  md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className=" order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2  md:items-start md:text-left ">
            <h1 className="text-3xl font-bold ">Market your Brand</h1>
            <p className="">
            Our team excels in providing comprehensive services that drive efficiency, enhance security, and promote growth. Whether you require custom software development, robust cybersecurity measures, or seamless IT infrastructure management, we have the expertise to transform your vision into reality.
            </p>
            <a href="/contact">
            
            <button className="rounded-md bg-white px-4 py-2 text-sm  text-black transition-colors duration-300 hover:bg-white/90">
              Get Started
            </button></a>
          </div>
          <div className="md:order-1 order-2 borderz">
            <iframe
              className="aspect-video w-full borderz"
              src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </main></>
  );
};

export default Banner;
