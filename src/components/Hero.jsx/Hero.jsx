import React from "react";
import Banners from "../../assets/undraw_real_time_sync_re_nky7 1.svg";
import Navbar2 from "../navbar/Navbar2";
import Service from "../Service/Service";
import Blogs from "../Blogs/Blogs";
import Banner from "../Banner/Banner";



const Hero = () => {
  return (
    
    <>
    <Navbar2 />
    <main className="bg-black w-full">
      
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8  md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
              We Build Apps That Get Trending On Appworld
            </h1>
            <p className="">
            We empower a diverse IT service-oriented workforce where strong individuals are unified by a clear common purpose – to deliver excellence and high level of customer satisfaction.
            </p>
            <div className="space-x-4">
             
              <a href="./services">
              <button className="border-1 hover:text-black hover:bg-white font-semibold  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
                Get Started
              </button></a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banners} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
    <Service />
    <Banner />
    <Blogs />
    
    </>
  );
};

export default Hero;
