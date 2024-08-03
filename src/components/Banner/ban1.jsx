

export default function ban1() {
  return (
    <>
    <div className="flex dark:text-white items-center justify-center flex-col md:flex-row space-y-5 my-10 px-4">
        
    <div data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true" className="space-y-4  w-full container  "
        >
          <h1 className='font-normal text-black md:text-[40px] md:font-thin text-xl'>
            Who we are
          </h1>
          <h1 className='text-black font-bold text-md md:text-2xl'>
            Technology investments as a differentiator
          </h1>
          <p className=' leading-5 text-gray-950 '>
            No forced partnership technology here. We focus on the right solution to drive our clients’ business forward and employ a technology-agnostic approach for all needed stages of the activity cycle, allowing access to current, robust, and advanced solutions. Paramount to this is ensuring the security and compliant use of all information. In the end, it’s not just technology; we ensure our methodologies, staff, industry knowledge, and governance align with the technology to drive the right client results.
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
						
            bg-[url('..\src\assets\services-bg.jpg')]
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



      
    </>
  )
}