import React, { useRef, useState } from 'react';
import Navbar2 from "./navbar/Navbar2";
import ResponsiveMenu from "./navbar/ResponsiveMenu";
import Footer from './Footer/Footer';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false); // State to track error occurrence

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8thn53y', 'template_1hte11e', form.current, {
        publicKey: '1nTDSFCp-sXiKDsKI',
      })
      .then(
        () => {
          setFormSubmitted(true);
          setErrorOccurred(false); // Ensure error is reset on success
        },
        (error) => {
          console.error('FAILED...', error.text);
          setErrorOccurred(true); // Set error state on failure
        }
      );
  };

  return (
    <>
      <Navbar2 />
      <ResponsiveMenu />
      <div className="relative bg-black/20 flex md:flex-row flex-col items-center justify-center w-full min-h-screen py-16">
        <div className="relative z-10 w-full md:w-[800px] p-8 bg-white md:bg-white/20 rounded-2xl shadow-lg backdrop-blur-lg">
          {formSubmitted ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-black">Thank You!</h1>
              <p className="mt-4 text-semibold border-l-8 border-r-8 border-black text-black">
                We appreciate your message. Our team will get back to  you via your mail  in the next 7hrs to 14hrs.
              </p>
            </div>
          ) : errorOccurred ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-red-600">Error</h1>
              <p className="mt-4 text-semibold border-l-8 border-r-8 border-black text-red-500">
                There was an issue sending your message. Please Check the internet Connection.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h1 className="text-3xl font-bold text-black">Contact Us</h1>
                <p className="mt-4 text-base text-slate-500">
                  For further questions, including partnership opportunities, please email 
                  blacktechafrica.com or contact us using our contact form.
                </p>
              </div>

              <form className="mt-8 space-y-6" ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-xs font-bold text-slate-800">Full Name</label>
                    <input 
                      type="text" name="user_name" required
                      className="mt-1 p-2 bg-slate-100 rounded-lg border text-black font-semibold shadow-inner focus:outline-none" 
                      placeholder="Full name" 
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-xs font-bold text-slate-800">Email</label>
                    <input 
                      type="email" name="user_email" required 
                      className="mt-1 p-2 bg-slate-100 border rounded-lg text-black font-semibold shadow-inner focus:outline-none" 
                      placeholder="Email" 
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-xs font-bold text-slate-800">Contact</label>
                    <input 
                      type="number" name="user_contact" required 
                      className="mt-1 p-2 bg-slate-100 border rounded-lg text-black font-semibold shadow-inner focus:outline-none" 
                      placeholder="contact" 
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-800">How can we help you?</label>
                  <textarea name="message" required
                    className="mt-1 p-2 bg-slate-100 border text-black font-semibold rounded-lg shadow-inner focus:outline-none" 
                    placeholder="I want to say that..." 
                    rows="3" 
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button 
                    type="submit" 
                    className="p-2 hover:bg-slate-300 mt-4 text-sm font-bold text-center text-white bg-black rounded-lg shadow"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        <img src="..\src\assets\bnw.avif" alt="" className='-ml-40 mt-24 md:block bg-cover bg-local hidden -rotate-2 w-[600px] h-[500px] bord' />
      </div>
      
    </>
  );
}
