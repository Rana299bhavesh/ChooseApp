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
          We are a one-stop solution for all your transportation needs. Whether you're looking for a budget-friendly ride or a premium travel experience, ChooseApp aggregates the best options from top cab providers ensuring you always get the best deal.
        </p>
        <p className="text-gray-700 text-lg">
          With real-time price comparisons, user-centric features, and a commitment to safety and sustainability, we are redefining urban mobility.
        </p>
        <p className="text-gray-700 text-lg">
          In the future, the ChooseApp universe will expand its horizons into multiple industries offering an array of services.
        </p>
        <p className="text-gray-700 text-base font-medium">
          Partnered with ONDC
        </p>
        <img
          src="/Images/ondc.png"
          alt="ONDC Logo"
          className="w-[200px] mx-auto md:mx-0 mt-2"
        />
      </div>
    </div>
  );
};

export default AboutUs;
