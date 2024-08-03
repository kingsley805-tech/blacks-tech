import React from "react";
import CountUp from "react-countup";

const Service = () => {
  return (
    <section className="container h-12 md:h-32">
      <div className="mx-auto my-4 grid w-full font-semibold rounded-md -translate-y-10 grid-cols-4 divide-x divide-black bg-white p-2 shadow-lg  dark:text-black md:max-w-[800px] md:-translate-y-16 md:p-3">
      <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black dark:text-black sm:text-lg md:text-2xl">
            <CountUp
              start={-75.039}
              end={605.012}
              duration={6.75}
              separator=" "
              // decimals={4}
              // decimal=","
              suffix="+"
            />
          </h1>
          <h1 className="sm:text-md text-xs font-semibold  md:text-lg">Clients</h1>
        </div>
        <div className="flex  flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black dark:text-black sm:text-lg md:text-2xl">
            <CountUp end={56} suffix="+" duration={6.75} />
          </h1>
          <h1 className=" sm:text-md text-xs md:text-lg">projects</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black dark:text-black sm:text-lg md:text-2xl">
            <CountUp end={144} suffix="k+" duration={7.88} />
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Subscribers</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black dark:text-black sm:text-lg md:text-2xl">
            <CountUp end={14} suffix="k+" duration={8.88} />
          </h1>
          <h1 className="sm:text-md text-xs font-semibold md:text-lg">Awards</h1>
        </div>
       
      </div>
    </section>
  );
};

export default Service;
