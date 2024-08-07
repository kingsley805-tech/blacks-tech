
import React, { useState } from 'react';

import Navbar2 from "./navbar/Navbar2";
import ResponsiveMenu from "./navbar/ResponsiveMenu";
import UiApply from './UiApply';
import ApplyForm from './ApplyForm';
import Fullstackapply from './fullstackapply';
import AutomationQAApply from './Oaapply';
export default function Services() {
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
    
<main className="  bg-gradient-to-r from-black via-t mb-24  to-black w-full">
      
      <section className="container flex h-[650px] flex-col items-center justify-center   md:h-[500px] ">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="absolute inset-0 bg-black  md:h-[572px] h-[720px]  "></div>
  <div
    data-aos="fade-right"
    data-aos-duration="400"
    data-aos-once="true"
    className="flex flex-col items-center gap-4 text-center font-semibold k text-white md:items-start md:text-left"
  >
    <h1 className="text-4xl text-white">
    Efficiency and Reliability
    </h1>
    <p className="text-white font-normal ">
    In today’s fast-paced world, we understand the importance of efficiency and reliability. We are committed to providing timely and dependable services that you can count on. Our processes are streamlined to ensure that you receive prompt and accurate results, without compromising on quality. We value your time and strive to make every interaction with us as smooth and efficient as possible..
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
      src="src/assets/9396695 (1).jpg"
      alt="No image"
      className="w-full h-full object-cover rounded-full imground "
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-white rounded-full  opacity-50"></div>
  </div>
</div>

      </section>
    </main>
    
 
 
 
       {/*systems integration*/}
    
        <div  data-aos="fade-left"
              data-aos-duration="500"
              data-aos-once="true" className="flex items-center justify-center  md:hidden my-6" id='allm'>
        <div className="card  w-96 h-[350px] flex bg-black flex-col items-start justify-start">
   <figure  className='flex items-center justify-center  flex-col'>
     <img className=''
       src="../src\assets\system-intergra.jpg"
       alt="car!" />
   </figure>
   <div className="   text-white p-3 rounded-2xl shadow-md flex flex-col items-start justify-start">
                <img src="../src/assets/syslog.svg" className='w-10' alt="System Integration" />
                <div className="flex w-full items-start justify-start md:space-y-4 flex-col">
                <h1 className=' font-bold  text-md '>
                  System Integration
                </h1>
                <p className='leading-5 text-sm '>
                In an increasingly complex and interconnected business environment, the ability to seamlessly integrate various systems and technologies is crucial for operational efficiency and strategic success.
                </p>
                
              </div>
              </div>
 </div>
        </div>
 

{/*desk*/}

  <div id='oneC' data-aos="fade-up"
              data-aos-duration="500"
               className="flex md:ml-[300px] md:h-[240px] md:space-x-3  md:rounded-l-2xl  bg-black  md:items-end md:justify-end flex-col md:flex-row space-y-4 my-14 ">
        
        
        <div  className=" w-60 md:w-full  text-white p-6 rounded-2xl  shadow-md flex flex-col items-start justify-start">
          <img src="../src/assets/syslog.svg" className='w-10' alt="System Integration" />
          <div className="flex   flex-col">
          <h1 className=' font-bold  text-md '>
            System Integration
          </h1>
          <p className='leading-5 text-sm '>
          In an increasingly complex and interconnected business environment, the ability to seamlessly integrate various systems and technologies is crucial for operational efficiency and strategic success. At our organization, we specialize in system integration, ensuring that your digital ecosystem functions harmoniously. Our expertise allows us to connect disparate systems, streamline processes, and enable a unified and efficient workflow
                           </p>
          
        </div>
        </div>
        
      
   <div className="md:w-[530px] flex items-center my-4  justify-center md:items-end md:justify-end   md:h-full"id='force'>
     <div id='force' className="md:w-[520px] w-[300px]  md:h-[270px]     
       overflow-hidden
       block
       z-10
       
       bg-[url('../src\assets\system-intergra.jpg')]
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

 
  
       
      
 
      
       {/* It Services */}
       <div  data-aos="fade-right"
              data-aos-duration="700"
              data-aos-once="true" className="flex items-center justify-center md:hidden my-6"id='allm'>
       <div className="card  w-96 h-[350px] flex bg-black flex-col items-start justify-start">
  <figure className='flex items-center justify-center  flex-col'>
    <img className=''
      src="..\src\assets\IT-services.jpg"
      alt="car!" />
  </figure>
  <div className="   text-white p-3 rounded-2xl shadow-md flex flex-col items-start justify-start">
               <img src="..\src\assets\itlog.svg" className='w-10' alt="System Integration" />
               <div className="flex items-start justify-start md:space-y-4 flex-col">
               <h1 className=' font-bold  text-md '>
                 IT Services
               </h1>
               <p className='leading-5 text-sm '>
                From infrastructure management and cloud services, innovation, and growth. Trust us to be your strategic IT partner, delivering the expertise and support required to achieve your digital transformation goals.
               </p>
               
             </div>
             </div>
</div>
       </div>
       
{/*desk*/}
 <div id='oneC'data-aos="fade-up"
              data-aos-duration="500" className="flex md:mr-[300px] md:h-[240px] md:space-x-3 md:rounded-r-2xl  bg-black  md:items-end md:justify-end flex-col md:flex-row space-y-8 my-32 ">
        
        
             
           
        <div className="md:w-[530px] flex items-center my-4  justify-center md:items-end md:justify-end   md:h-full"id='for'>
          <div id='for' className="md:w-[520px] w-[300px]  md:h-[270px]     
            overflow-hidden
            block
            z-10
						
            bg-[url('..\src\assets\IT-services.jpg')]
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

        
             <div className=" w-60 md:w-full  text-white p-6 rounded-2xl  shadow-md flex flex-col items-end justify-end">
               <img src="../src/assets/itlog.svg" className='w-10' alt="System Integration" />
               <div className="flex   flex-col items-end justify-end">
               <h1 className=' font-bold  text-md '>
                 IT Services
               </h1>
               <p className='leading-5 text-sm  text-end justify-end'>
               Our comprehensive IT services are designed to empower your organization with the tools and expertise needed to navigate the complexities of the digital age. From infrastructure management and cloud services to cybersecurity and data analytics, we provide holistic solutions that drive efficiency, innovation, and growth. Trust us to be your strategic IT partner, delivering the expertise and support required to achieve your digital transformation goals.
               </p>
               
             </div>
             </div>
      </div>
 
      
       
       
      
 
 {/*system optimization*/}
 <div  data-aos="fade-left"
              data-aos-duration="800"
              data-aos-once="true" className="flex items-center justify-center md:hidden  my-6 id='allm'">
       <div className="card  w-96 h-[350px] flex bg-black flex-col items-start justify-start">
  <figure className='flex items-center justify-center  flex-col'>
    <img className=''
      src="..\src\assets\opti.jpg"
      alt="car!" />
  </figure>
  <div className="   text-white p-3 rounded-2xl shadow-md flex flex-col items-start justify-start">
               <img src="../src/assets/prolog.svg" className='w-10' alt="System Integration" />
               <div className="flex items-start justify-start md:space-y-4 flex-col">
               <h1 className=' font-bold  text-md '>
                 System Integration
               </h1>
               <p className='leading-5 text-sm '>
               Our team conducts an in-depth analysis of your existing processes to identify inefficiencies and areas for improvement. Using advanced tools and techniques, we map out each step of your workflows, providing a clear and detailed picture of your operational landscape.
               </p>
               
             </div>
             </div>
</div>
       </div>
      
{/*desk*/}
<div id='oneC'data-aos="fade-up"
              data-aos-duration="700" className="flex md:ml-[300px] md:h-[240px] md:space-x-3 md:rounded-l-2xl  bg-black  md:items-end md:justify-end flex-col md:flex-row space-y-4 my-14 ">
        
        
        <div className=" w-60 md:w-full  text-white p-6 rounded-2xl  shadow-md flex flex-col items-start justify-start">
          <img src="../src/assets/prolog.svg" className='w-10' alt="System Integration" />
          <div className="flex  flex-col">
          <h1 className=' font-bold  text-md '>
            System Integration
          </h1>
          <p className='leading-5 text-sm '>
          Effective process optimization begins with a thorough understanding of your current operations. Our team conducts an in-depth analysis of your existing processes to identify inefficiencies, bottlenecks, and areas for improvement. Using advanced tools and techniques, we map out each step of your workflows, providing a clear and detailed picture of your operational landscape.
          </p>
          
        </div>
        </div>
        
      
   <div className="md:w-[530px] flex items-center my-4  justify-center md:items-end md:justify-end   md:h-full"id='force'>
     <div id='force' className="md:w-[520px] w-[300px]  md:h-[270px]     
       overflow-hidden
       block
       z-10
       
       bg-[url('..\src\assets\opti.jpg')]
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
       
       {/* Feedback */}
       <div data-aos="fade-up"
              data-aos-duration="800" className="flex items-center justify-center flex-col space-y-3 my-8">
        <h3 className='text-black font-extrabold text-norma md:text-2xl uppercase'>You need to know more?! lET’S talk now!</h3>
        <a href="/contact"className='bg-black text-white p-2 rounded-full hover:bg-slate-400 animate-pulse hover:text-black'>
       <>Contact Us</>
       </a>
       </div>


    </>
  )
}