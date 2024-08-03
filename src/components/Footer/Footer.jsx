import React, { useRef, useState } from 'react';
import Logo from '../logo'
import emailjs from '@emailjs/browser';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const form = useRef();
  const [formSubmit, setFormSubmit] = useState(false);
  const [errorOccur, setErrorOccur] = useState(false); // State to track error occurrence

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9wb1ovr', 'template_cedghr7', form.current, {
        publicKey: 'JaOIv_BqM24TCl7tp',
      })
      .then(
        () => {
          setFormSubmit(true);
          setErrorOccur(false); // Ensure error is reset on success
        },
        (error) => {
          console.error('FAILED...', error.text);
          setErrorOccur(true); // Set error state on failure
        }
      );
  };
  return (
   
      <div  className="bg-white md:p-2 p-4 flex items-center border border-black shad  text-black justify-center border-t-1 drop-shadow-lg    shadow-lg space-y-1" id='footer'>
      <div className="flex items-center flex-col footer sm:space-y-3 md:flex-row justify-center md:space-x-44">
        <div className="flex flex-col items-start justify-start">
          <Logo />
          <span>© 2024 tech All Rights Reserved</span>
        </div>



        {formSubmit ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-black">Thank You!</h1>
              <p className="mt-4 text-semibold border-l-8 border-r-8 border-black text-black">
              I just wanted to take a moment to express my deepest gratitude for being a valued subscriber
              </p>
            </div>
          ) : errorOccur ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-red-600">Error</h1>
              <p className="mt-4 text-semibold border-l-8 border-r-8 border-black text-red-500">
                There was an issue sending your message. Please Check the internet Connection.
              </p>
            </div>
          ) : (
            <> <form action="" ref={form} onSubmit={sendEmail}>


<div className="flex flex-col space-y-4">
            <h1>Subscribe to our newsletter</h1>
                      <div className="flex space-x-1">
                      <input
                        className="rounded-full px-3 py-1 text-white focus:border-white/95 focus:outline-none focus:ring-2 focus:ring-white/95 "
                        type="text"
                        placeholder="Email"
                        name='mail'
                      />
                      <button className="bg-black text-white font-medium rounded-full px-2 hover:bg-gray-800 hover:text-black">Submit</button>
                      </div>
            </div>
            </form>
            </>
          )}




       
        <div className="flex flex-col gap-3">
                  
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
        <div className="">Cloud tech, Ghana-Accra</div>
      </div>
    </div>
    
  );
};

export default Footer;
