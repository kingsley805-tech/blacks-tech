import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

export default function ApplyForm() {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for detailed error messages
  const [cvFileUrl, setCvFileUrl] = useState(''); // State for CV file URL

  // Function to handle file upload
  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('cvUpload', file);

      const response = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('File upload response:', response.data);

      if (response.data && response.data.fileUrl) {
        setCvFileUrl(response.data.fileUrl);
        return response.data.fileUrl; // Return file URL for use in email sending
      } else {
        throw new Error('Invalid response data: ' + JSON.stringify(response.data));
      }
    } catch (error) {
      console.error('File upload failed:', error.message);
      setErrorMessage('File upload failed: ' + error.message);
      setErrorOccurred(true);
      throw error; // Re-throw to handle in sendEmail
    }
  };

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const fileInput = e.target.cvUpload;
      if (fileInput.files.length > 0) {
        await handleFileUpload(fileInput.files[0]);
      }

      // Prepare email data
      const emailFormData = new FormData(form.current);
      emailFormData.append('cvFileUrl', cvFileUrl); // Attach file URL if available

      await emailjs.sendForm('service_wsl9m6a', 'template_4ifqmvb', emailFormData, '1nTDSFCp-sXiKDsKI');

      console.log('Email sent successfully');
      setFormSubmitted(true);
      setErrorOccurred(false);
    } catch (error) {
      console.error('Error during form submission:', error.message);
      setErrorMessage('Error during form submission: ' + error.message);
      setErrorOccurred(true);
    }
  };

  return (
    <div className="container p-4 space-y-8 bg-white text-black">
      {formSubmitted ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">Thank You!</h1>
          <p className="mt-4 text-base text-gray-700 border-l-4 border-black p-2">
            Your application has been received. We will get back to you soon.
          </p>
        </div>
      ) : errorOccurred ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">Error</h1>
          <p className="mt-4 text-base text-red-600 border-l-4 border-black p-2">
            {errorMessage || 'There was an issue sending your application. Please try again later.'}
          </p>
        </div>
      ) : (
        <form className="w-full max-w-4xl mx-auto text-black text-lg font-normal space-y-4" ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-gray-600 text-base mb-2">Full Name</label>
              <input 
                id="fullName" 
                name="fullName"
                type="text" 
                className="p-2 bg-gray-100 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 border-gray-300" 
                placeholder="Enter your full name" 
                required 
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 text-base mb-2">Email</label>
              <input 
                id="email" 
                name="email"
                type="email" 
                className="p-2 bg-gray-100 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 border-gray-300" 
                placeholder="Enter your email address" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-600 text-base mb-2">Phone</label>
              <input 
                id="phone" 
                name="phone"
                type="tel" 
                className="p-2 bg-gray-100 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 border-gray-300" 
                placeholder="Enter your phone number" 
                required 
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cvUpload" className="text-gray-600 text-base mb-2">Upload CV</label>
              <input
                id="cvUpload"
                name="cvUpload"
                type="file"
                className="h-10 w-full bg-gray-100 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-500 border-gray-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="coverLetter" className="text-gray-600 text-base mb-2">Cover Letter</label>
            <textarea 
              id="coverLetter" 
              name="coverLetter"
              className="p-2 bg-gray-100 rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 border-gray-300 h-32" 
              placeholder="Write your cover letter here" 
              required 
            />
          </div>

          <div className="flex items-end justify-end my-3">
            <button 
              type="submit" 
              className="p-2 w-32 bg-black text-white rounded-full shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
