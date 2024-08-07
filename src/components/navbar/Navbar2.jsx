import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavLink} from "react-router-dom";
import About from "../About";
import Logo from '../logo'
const Navbar2 = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] border-b-[1px]  border-black bg-white font-semibold text-black shadow-lg"
      >
        <nav className="container  flex h-[70px] items-center justify-between py-2 ">
          <div className="text-2xl text-black md:text-3xl ">
            <a href="" className="">
              
              <Logo />
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a
                  href="/"
                  className="flex h-[72px] items-center gap-[2px]"
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
              <li className="cursor pointer  hover:text-gray-800 hover:animate-pulse   bg-black p-2 rounded-full text-white animate-pulse">
                <a href="./">Learning Platform</a>
              </li>
              <li className="cursor pointer hover:text-white hover:animate-pulse bg-black p-2 rounded-full text-white animate-pulse">
                <a href="./contact">Contact Us</a>
              </li>
              {/* Phone number section */}
              
              {/* Light and dark mode switcher */}
             
            </ul>
          </div>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
