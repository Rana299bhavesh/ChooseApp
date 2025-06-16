import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-5xl font-semibold text-gray-900">
          Welcome to <br />
          ChooseApp, <br />
          India’s first modern <br />
          mobility super app.
        </h1>
        <p className="text-gray-900 text-xl font-semibold">
          Get easy access to various cab aggregators across the <br />
          country to get ensured rides.
          Find Cabs, autos, bikes at <br />
          your fingertips in the easiest way – all in one app!
        </p>
        <div >
          <p className="text-2xl font-medium mt-12">Download the app</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <div className="flex flex-col items-center">
              <p className="mb-1 text-xl text-gray-900 mr-12">choose.app</p>
              <a href="https://apps.apple.com/in/app/choose-app-compare-cab-prices/id6663954160" target="_blank" rel="noopener noreferrer">
                <img src="/Images/app.png" alt="App Store" className="w-40" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-1 text-xl text-gray-900 mr-12">chooseapp</p>
              <a href="https://play.google.com/store/apps/details?id=com.az.choosecabs" target="_blank" rel="noopener noreferrer">
                <img src="/Images/playstore.png" alt="Play Store" className="w-40" />
              </a>
            </div>
            <div className="flex justify-center">
              <img src="/Images/scanner.png" alt="QR Code" className="w-30 h-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center items-center relative mb-10 md:mb-0">
        <img src="/Images/herosection.png" alt="ChooseApp Preview 1" className="w-100 h-100" />
      </div>
    </div>
  );
};

export default HeroSection;
