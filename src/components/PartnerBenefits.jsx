import React from "react";

const PartnerBenefits = () => {
  return (
    <div className="text-center px-6 md:px-20 py-16 bg-white">
      <h2 className="text-3xl font-bold mb-4">Partner +</h2>
      <p className="max-w-3xl mx-auto text-gray-900">
        Join the ChooseApp partner network and elevate your reach as a premier transportation service provider. Let's drive the future of urban mobility together – partner with Choose App today!
      </p>

      <h3 className="text-2xl font-bold mt-2 mb-12">Partner Benefits</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center">
        {/* Left Section */}
        <div className="space-y-10 ">
          <div className="flex items-start gap-6 text-left">
            <img src="/Images/eye.png" alt="Visibility" className="w-16 h-16 ml-16" />
            <div>
              <h4 className="font-bold text-3xl">Big On Visibility</h4>
              <p className="text-gray-700">Say goodbye to hiding in the shadows! Get seen by more customers.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-left">
            <img src="/Images/city.png" alt="City Domination" className="w-16 h-16" />
            <div>
              <h4 className="font-bold text-3xl">City Domination</h4>
              <p className="text-gray-700">Enter new markets and expand your services & your territory and become the go-to hero in your city!</p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-left">
            <img src="/Images/reviews.png" alt="Reviews" className="w-16 h-16 ml-16" />
            <div>
              <h4 className="font-bold text-3xl">Reviews that Rock</h4>
              <p className="text-gray-700">Enter new markets and expand your services & your territory and become the go-to hero in your city!</p>
            </div>
          </div>
        </div>

        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/Images/carTaxi.png"
            alt="Taxi"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-10">
          <div className="flex items-start gap-4 text-left">
            <img src="/Images/market.png" alt="Market Penetration" className="w-16 h-16 mb-28" />
            <div>
              <h4 className="font-bold text-3xl">Market Penetration</h4>
              <p className="text-gray-700">Highlight your unique services and stand out from the crowd with competitive advantage.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-left">
            <img src="/Images/booking.png" alt="Booking" className="w-16 h-16 ml-16 mb-20" />
            <div>
              <h4 className="font-bold text-3xl">Seamless Booking</h4>
              <p className="text-gray-700">Hassle-free booking process integrated with major payment gateway.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-left">
            <img src="/Images/bell.png" alt="Security" className="w-16 h-16" />
            <div>
              <h4 className="font-bold text-3xl">Top-Notch Security</h4>
              <p className="text-gray-700">Ironclad protection for all transactions and data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBenefits;
