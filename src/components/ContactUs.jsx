import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-200 px-6 py-12">
      {/* Left Section */}
      <div className="lg:w-1/3 mb-12  ml-[100px] lg:mb-0 lg:pr-10">
        <h2 className="text-4xl font-bold mb-4">
          Contact <span className="text-yellow-400">Us</span>
        </h2>
        <p className="mb-6 text-gray-900 text-base  max-w-xs">
          We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us through any of the following channels:
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 text-xl flex items-center gap-2">
             Email:
          </h3>
          <a href="mailto:team@choosecabs.com" className="text-gray-900 text-base">
            team@choosecabs.com</a>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-900  text-xl flex items-center gap-2">
             Address:
          </h3>
          <p className="text-gray-900 text-base">
            NVS Choose Cabs India Pvt Ltd,<br />
            105, Stanford Plaza, Off Link Road,<br />
            Andheri West Mumbai 400053
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 text-xl">Connect with us:</h3>
          <div className="flex items-center gap-4 mt-2 ">
            <Facebook className="text-blue-600 w-6 h-6" />
            <Linkedin className="text-blue-800 w-6 h-6" />
            <Instagram className="text-pink-500 w-6 h-6" />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 text-xl">Links:</h3>
          <p className=" text-gray-900 text-base">Privacy Policy · Refund Policy · Terms and Conditions</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 bg-gray-300 rounded-xl p-6 mr-[100px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="lg:w-2/3">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">How Can We Help You?</h3>
            <h2 className="text-4xl font-semibold mb-4">Have a Question?</h2>
            <p className="text-gray-900 mb-6">
              If you have any comments, suggestions or questions, please do not hesitate to contact us. Our high-quality office staff will help you and answer all your questions.
            </p>

            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="John"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  placeholder="name@flowbite.com"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  placeholder="Your City..."
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <textarea
                placeholder="Leave a comment..."
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                SEND A REQUEST
              </button>
            </form>
          </div>

          {/* Image on the right */}
          <div className="lg:w-1/3 flex justify-center items-center">
            <img
              src="/Images/herosection.png"
              alt="ChooseApp Preview"
              className="w-full max-w-xs object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
