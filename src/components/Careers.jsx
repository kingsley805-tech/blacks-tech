
import React, { useState } from 'react';

import Navbar2 from "./navbar/Navbar2";
import ResponsiveMenu from "./navbar/ResponsiveMenu";
import UiApply from './UiApply';
import ApplyForm from './ApplyForm';
import Fullstackapply from './fullstackapply';
import AutomationQAApply from './Oaapply';
export default function Career() {
    const [stackapply, setstackapply] = useState(false);
  const [isapply, setapply] = useState(false);
  const [oaapply, setoaapply] = useState(false);
  const apply = () => {
    setapply(true);
    setstackapply(false);
  };

  const stack = () => {
    setstackapply(true);
    setapply(false);
  };
  const oa = () => {
    setoaapply(true);
    setapply(false);
    setstackapply(false);
  };
  return (
    
    <>
    <Navbar2 />
    <ResponsiveMenu />
    
<main className="  bg-black w-full">
      
      <section className="container flex h-[650px] flex-col items-center justify-center bg-[conic-gradien  md:h-[500px] ">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="absolute inset-0 bg-black  md:h-[572px] h-[720px]"></div>
  <div
    data-aos="fade-right"
    data-aos-duration="400"
    data-aos-once="true"
    className="flex flex-col items-center gap-4 text-center font-semibold text-white md:items-start md:text-left"
  >
    <h1 className="text-4xl text-white">
    Customer-Centric Approach
    </h1>
    <p className="text-white font-normal">
    At our organization, we pride ourselves on our commitment to delivering exceptional service to each and every client. Our motto, "We Serve You Right and Perfectly," is not just a slogan—it's a promise that we strive to uphold in all our interactions and operations.
    </p>
    <div className="space-x-4">
      {/* Buttons or other elements */}
    </div>
  </div>
  <div
    data-aos="fade-left"
    data-aos-duration="400"
    data-aos-once="true"
    className="relative w-full"
  >
    <img
      src="..\src\assets\3133996.jpg"
      alt="No image"
      className="w-full h-full object-cover rounded-full imground "
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-white rounded-full  opacity-50"></div>
  </div>
</div>

      </section>
    </main>
    

{/* Job Listings */}
<div className="container mx-auto p-4 my-36 bg-white shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="md:w-1/2 w-full flex flex-col items-center md:items-start justify-center mb-4 md:mb-0">
              <div className="flex flex-col">
                <h1 className="font-semibold w-56 text-black md:text-[20px] text-md uppercase">
                  join our team of professionals
                </h1>
                <div className="mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="black"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between border-b border-zinc-300 pb-4">
                  <span className="text-black text-xl font-normal font-sans">
                    UI/UX Designer
                  </span>
                  <div className="flex items-center bg-black text-white font-medium space-x-2 p-1 px-3 hover:bg-slate-300 rounded-full">
                    <button
                      className="text-white md:text-xl text-sm font-normal font-sans hover:text-gray-400"
                      onClick={apply}
                    >
                      Apply
                    </button>
                    <div className="flex items-center justify-center border rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-300 pb-4">
                  <span className="text-black text-xl font-normal font-sans">
                    Full-Stack Developer
                  </span>
                  <div className="flex items-center bg-black text-white font-medium space-x-2 p-1 px-3 hover:bg-slate-300 rounded-full">
                    <button
                      className="text-white md:text-xl text-sm font-normal font-sans hover:text-gray-400"
                      onClick={stack}
                    >
                      Apply
                    </button>
                    <div className="flex items-center justify-center border rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in" className="flex items-center justify-between">
                  <span className="text-black text-xl font-normal font-sans">
                    Automation QA
                  </span>
                  <div className="flex items-center bg-black text-white font-medium space-x-2 p-1 px-3 hover:bg-slate-300 rounded-full">
                    <button
                      
                      className="text-white md:text-xl text-sm font-normal font-sans hover:text-gray-400" onClick={oa}
                    >
                      Apply
                    </button>
                    <div className="flex items-center justify-center border rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conditional Form Rendering */}
        {isapply && (
          <>
            <UiApply />
            <ApplyForm />
          </>
        )}
        {stackapply && (
          <>
            <Fullstackapply />
            <ApplyForm />
          </>
        )}
        {oaapply && (
          <>
            <AutomationQAApply />
            <ApplyForm />
          </>
        )}
       


    </>
  )
}