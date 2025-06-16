import React from "react";

const InvestorsSection = () => {
  return (
    <div className="relative w-full h-[350px]">
      {/* Background Image */}
      <img
        src="/Images/investor_bg.jpg" // place your image in public/Images folder and rename accordingly
        alt="Investors Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-700 bg-opacity-60 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-4xl">
          <h2 className="text-white text-4xl font-bold mb-6">Investors</h2>
          <p className="text-white text-xl font-medium mb-4">
            Invest in the future of mobility with ChooseApp, India's leading
            transportation super app. With our innovative platform, we
            aggregate top cab services, providing unmatched convenience and
            choice to commuters nationwide.
          </p>
          <p className="text-white text-xl font-medium">
            As we expand and scale, we invite visionary investors to join us in
            revolutionising urban transportation. With a rapidly growing user
            base, strategic partnerships, and a commitment to excellence,
            ChooseApp is poised for exponential growth. Be a part of our
            journey and drive the future of mobility in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestorsSection;
