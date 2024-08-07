import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-white px-8 pb-6 pt-24 text-black transition-all duration-200 md:hidden`}
    >
      <div className="card ">
        
        <nav className="mt-12">
          <ul className="space-y-10 text-xl">
          
          <li className="group relative cursor-pointer">
                <a
                  href="/"
                  className="flex  items-center gap-[2px]"
                >
                  Home
                  
                </a>
               
              </li>
              <li className="cursor pointer hover:text-gray-800 hover:animate-pulse">
                <a href="./about">About us</a>
              </li>
              <li className="cursor pointer hover:text-gray-800 hover:animate-pulse">
                <a href="./services">Services</a>
              </li>
              <li className="cursor pointer hover:text-gray-800 hover:animate-pulse">
                <a href="./career">careers</a>
              </li>
              <li className="cursor pointer text-center  hover:text-gray-800 hover:animate-pulse   bg-black p-2 rounded-full text-white animate-pulse">
                <a href="./">Learning Platform</a>
              </li>
              <li className="cursor pointer hover:text-white text-center hover:animate-pulse bg-black p-2 rounded-full text-white animate-pulse">
                <a href="./contact">Contact Us</a>
              </li>
              
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
