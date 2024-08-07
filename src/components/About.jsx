
import React from "react"

import Navbar2 from "./navbar/Navbar2";
import ResponsiveMenu from "./navbar/ResponsiveMenu";
export default function About() {
  

  return (
    
    <>
    <Navbar2 />
    <ResponsiveMenu />
<main className="  bg-black w-full">
      
      <section className="container flex h-[650px] flex-col items-center justify-center   md:h-[500px] ">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="absolute inset-0  md:h-[572px] h-[720px]   opacity-50"></div>
  <div
    data-aos="fade-right"
    data-aos-duration="400"
    data-aos-once="true"
    className="flex flex-col items-center gap-4 text-center font-semibold text-white md:items-start md:text-left"
  >
    <h1 className="text-4xl text-white">
    WE SERVES YOU RIGHT AND PERFECTLY
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
      src="..\src\assets\about-bg.webp"
      alt="No image"
      className="w-full h-full object-cover rounded-full imground "
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-white rounded-full  opacity-50"></div>
  </div>
</div>

      </section>
    </main>
    <div className="flex dark:text-white items-center justify-center flex-col md:flex-row space-y-5 my-10 px-4">
        
    <div data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true" className="space-y-4  w-full container  "
        >
          <h1 className='font-normal text-black md:text-[40px] md:font-thin text-xl'>
          we are tech
          </h1>
          <h1 className='text-black font-bold text-md md:text-2xl'>
          Delivering Excellence: Serving You Right and Perfectly
          </h1>
          <p className=' leading-5 text-gray-950 '>
          At our organization, "We Serve You Right and Perfectly" is more than just a statement; it’s the foundation of our service philosophy. We are committed to providing you with quality, precision, and reliability in everything we do. With a customer-centric approach, a dedicated team, and a focus on continuous improvement, we strive to offer you nothing but the best. Trust us to serve you right and perfectly—because you deserve nothing less.
          </p>
         
        </div>
        
        <div
         data-aos="fade-left"
         data-aos-duration="650"
         data-aos-once="true" className="w-full order-2 md:order-1 flex items-center justify-center ">
         <div className="md:w-[520px] w-full h-[260px] borderz  absoute hover:scale-95 
            overflow-hidden
            block
            z-10
						
            bg-[url('..\src\assets\5408612.jpg')]
            bg-cover
            bg-no-repeat
            bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            
            before:opacity-10
            before:z-[-5]"></div>
         </div>
      </div>
{/*2*/}

 <div className="flex  items-center md:space-x-20 justify-center flex-col md:flex-row space-y-5 my-10 px-4">
    
         <div
         data-aos="fade-left"
         data-aos-duration="650"
         data-aos-once="true" className="w-full order-2  md:order-1 flex items-center justify-center ">
         <div className="md:w-[520px] w-full h-[260px] borderz  absoute hover:scale-95 
            overflow-hidden
            block
            z-10
						
            bg-[url('..\src\assets\639877.jpg')]
            bg-cover
            bg-no-repeat
            bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            
            before:opacity-10
            before:z-[-5]"></div>
         </div>

         <div data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true" className="space-y-4  w-full order-1 md:order-2 flex flex-col items-center justify-center">



<div className=" ">
           <div className="flex flex-col  items-end justify-end bg-blac  ">
             <h1 className='font-normal   text-black flex item-end justify-end md:text-[20px] md:font-thin text-md'>
               we Are Digital
             </h1>
             <div className="">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-8">
                 <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
               </svg>
             </div>
           </div>
           <div className="flex flex-col space-y-2 p-2 ">
             <div className="flex md:space-x-4 space-x-2 flex-row">
               <div className="">
                 <img src="..\src\assets\Vector-1.svg" className='w-44 md:w-10' alt="Our Mission & Vision" />
               </div>
               <div className="">
                 <h1 className='text-black font-bold text-md md:text-md'>
                 Empowering Your Digital Future
                 </h1>
                 <p className='w-full md:w-[450px] leading-5 text-gray-950'>
                 In today's fast-paced, technology-driven world, embracing digital transformation is essential. At our organization, we proudly declare, "We Are Digital." This commitment to digital excellence drives our innovative solutions, meeting the evolving needs of our clients.
                 </p>
               </div>
             </div>
             <div className="flex md:space-x-4 flex-row space-x-2">
               <div className="">
                 <img src="..\src\assets\Vector-2.svg" className='w-40 md:w-10' alt="Our Approach" />
               </div>
               <div className="">
                 <h1 className='text-black font-bold text-md md:text-md'>
                   Our Approach
                 </h1>
                 <p className='w-full md:w-[450px] leading-5 text-gray-950'>
                   We offer our clients the development of CRM cloud systems, bespoke website development and design, project and R&D management, custom development, and system integration.
                 </p>
               </div>
             </div>
           </div>
         </div>
              </div>


       </div>


       {/*Product*/}
       <main data-aos="fade-up" data-aos-offset="400">
      <section className="container mb-10 py-8">
      <div className="flex flex-col my-6">
           <h1 className='font-normal  text-black md:text-[20px] text-md'>
             Our products
           </h1>
           <div className="">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className=" w-8">
               <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
             </svg>
           </div>
         </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 borz shadow-lg transition-all duration-500 hover:shadow-xl   "
          >
             <div className="md:space-y-2 hover:scale-95 ">
             <div className="bg-black  text-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
               <img src="..\src\assets\syslog.svg" className='w-10' alt="System Integration" />
               <div className="flex items-center justify-center flex-col">
               <h1 className=' font-bold  text-md md:text-md'>
                 System Integration
               </h1>
               <p className='leading-5 text-sm '>
                 Indium Technologies excels in integrating diverse client-based systems and success across various platforms and data sources.
               </p>
               
             </div>
             </div>
             
           </div>
          </div>
          <div
            id="card"
            className="p-4 borz shadow-lg transition-all duration-200 hover:shadow-xl "
          >
            <div className="md:space-y-2 hover:scale-95 ">
             <div className="bg-gray-50  text-black p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
               <img src="..\src\assets\itlog2.svg" className='w-10 text-black' alt="IT Services" />
               <div className="flex items-center justify-center flex-col">
               <h1 className=' font-bold  text-md md:text-md'>
                 IT Services
               </h1>
               <p className='leading-5 text-sm '>
                 While you focus on delivering top products or services, we support you in meeting industry demands and emerging trends effectively.
               </p>
              
             </div>
             </div>
             
           </div>
          </div>
          <div
            id="card"
            className="p-4 borz shadow-lg transition-all duration-200 hover:shadow-xl k:bg-slate-950"
          >
           <div className="md:space-y-2 hover:scale-95 ">
            <div className="bg-black  text-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
              <img src="../src/assets/prolog.svg" className='w-10' alt="Process Optimization" />
              <div className="flex items-center justify-center flex-col">
              <h1 className=' font-bold  text-md md:text-md'>
                Process Optimization
              </h1>
              <p className='leading-5 text-sm '>
                Optimize efficiencies with methodology and tools, energizing workforce management to maximize savings
              </p>
              
            </div>
            </div>
           
          </div>
          </div>
        </div>
      </section>
    </main>

       {/*Team Member*/}
       <main data-aos="fade-up" data-aos-offset="400">
      <section className="container mb-10 py-8">
      <div className="flex flex-col my-6">
           <h1 className='font-normal  text-black md:text-[20px] text-md'>
             Our Team
           </h1>
           <div className="">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className=" w-8">
               <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
             </svg>
           </div>
         </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 borz shadow-lg transition-all  duration-500 hover:shadow-xl   "
          >
             <div className=" max-w-sm  border border-gray-200 rounded-2xl shadow hover:scale-95 bg-black dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        
        
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full bg-white shadow-lg"
          src="..\src\assets\my raw profile.png"
          alt="kingsley image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Kingsley</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
        <div className="flex mt-4 md:mt-6">
          
          <a
            href="https://wa.me/233550868038"
            className="py-2 px-4 ms-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg  hover:bg-gray-400 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            Message
          </a>
        </div>
      </div>
    </div>
          </div>
          <div
            id="card"
            className="p-4 borz shadow-lg transition-all duration-200 hover:shadow-xl "
          >
            <div className="w60 max-w-sm  border border-gray-200 rounded-2xl shadow hover:scale-95 bg-black dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        
        
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full bg-white shadow-lg"
          src="..\src\assets\john-removebg-preview.png"
          alt="john image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">John</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Systems Engineer</span>
        <div className="flex mt-4 md:mt-6">
          
          <a
            href="https://wa.me/+233591518686"
            className="py-2 px-4 ms-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg  hover:bg-gray-400 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            Message
          </a>
        </div>
      </div>
    </div>
          </div>
          <div
            id="card"
            className="p-4 borz shadow-lg transition-all duration-200 hover:shadow-xl k:bg-slate-950"
          >
           <div className="w60 max-w-sm   border border-gray-200 rounded-2xl shadow hover:scale-95 bg-black dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
              
              
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full bg-white shadow-lg"
                src="..\src\assets\moses-removebg-preview.png"
                alt="Moses image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Moses</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Back-End Engineer</span>
              <div className="flex mt-4 md:mt-6">
                
                <a
                  href="https://wa.me/+254795319311"
                  className="py-2 px-4 ms-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg  hover:bg-gray-400 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 "
                >
                  Message
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
 {/* Feedback */}
 <div  data-aos="fade-up"
    data-aos-duration="400" className="flex items-center justify-center flex-col space-y-3 my-8">
        <h3 className='text-black font-extrabold text-norma md:text-2xl uppercase'>Sounds Great?! Let’s work together!</h3>
       <a href="/contact"className='bg-black text-white p-2 rounded-full hover:bg-slate-400 animate-pulse hover:text-black'>
       <>Contact Us</>
       </a>
       </div>
    </>
  )
}