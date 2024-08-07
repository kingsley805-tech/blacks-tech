import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Swipe from "./components/Blogs/Swipe";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero.jsx/Hero";
// import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar/Navbar2";
import { useEffect } from "react";
import { useState } from "react";
import Service from "./components/Service/Service";
import Services from "./components/Services";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/About';
import Contact from "./components/Contact";
import Career from "./components/Careers";
import Thanks from "./components/Thanks";


function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {load ? (
      <div className="flex items-center justify-center bg-black h-screen">
      <div className="flex items-center justify-center">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
    
      ) : (
        <div className="dark:text-white bg-white overflow-hidden">
          <div className="fixed left-0 right-0 top-0 z-50 bg-black w-full">
            {/* <Navbar /> */}
            <Navbar2 />
          </div>

          <Router>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/career" element={<Career />} />
              <Route path="/thanks" element={<Thanks />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </Router>

          {/* <Swipe /> */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
