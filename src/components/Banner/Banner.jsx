import React from "react";
import BannerImg from "../../assets/marketing-speaker.png";
import Ban1 from "./ban1";
import Ban2 from "../Banner/ban2";

const Banner = () => {
  return (
    <>
    <Ban1 />
    <Ban2 />
    <main className=" w-screen container">
      
      <section data-aos="fade-up" className="container py-8  md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div data-aos="fade-left"
         data-aos-duration="650"
         data-aos-once="true" className=" text-black order-2 flex flex-col items-center gap-4 text-center text-w md:col-span-2  md:items-start md:text-left ">
            <h1 className="text-3xl font-bold text-black">Market your Brand</h1>
            <p className="font-semibold text-black">
            Our team excels in providing comprehensive services that drive efficiency, enhance security, and promote growth. Whether you require custom software development, robust cybersecurity measures, or seamless IT infrastructure management, we have the expertise to transform your vision into reality.
            </p>
            <a href="/contact">
            
            <button className="rounded-md bg-black px-4 py-2 text-sm  text-white transition-colors hover:text-black duration-300 hover:bg-white/90">
              Get Started
            </button></a>
          </div>
          <div data-aos="fade-right"
         data-aos-duration="750"
         data-aos-once="true" className="mockup-phone md:order-2 order-2">
  <div className="camera"></div>
  <div className="display flex items-center justify-center flex-col ">
    <div className="artboard artboard-demo phone-1">
      <video
        src="../src/assets/coding-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      ></video>
    </div>
    <div className="w-36 h-3 bg-slate-300 mt-3 rounded-full"></div>
  </div>
</div>

          
        </div>
      </section>
    </main></>
  );
};

export default Banner;
