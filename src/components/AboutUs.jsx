import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 bg-white gap-10">
      {/* Left - Car Image with Blue Background */}
      <div className="mr-8">
        <img
          src="/Images/car.png"
          alt="City Taxi"
          className="h-[600px] w-[550px]"
        />
      </div>

      {/* Right - Text Content and ONDC Logo */}
      <div className="max-w-xl space-y-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
        <p className="text-gray-700 text-lg">
          We are your one-stop destination for smarter grocery shopping. Whether you’re looking to save more or shop from your favorite platform, Onekart brings you the best deals from top grocery delivery services — all in one app.

        </p>
        <p className="text-gray-700 text-lg">
          With real-time price comparisons, user-friendly features, and a focus on convenience and transparency, we’re reshaping the way India shops for groceries.

        </p>
        <p className="text-gray-700 text-lg">
         In the near future, the Onekart ecosystem will grow beyond groceries, offering a wide range of everyday shopping and savings solutions.
        </p>
        {/* <p className="text-gray-700 text-base font-medium">
          Partnered with ONDC
        </p>
        <img
          src="/Images/ondc.png"
          alt="ONDC Logo"
          className="w-[200px] mx-auto md:mx-0 mt-2"
        /> */}
      </div>
    </div>
  );
};

export default AboutUs;
