import React, { useState } from 'react';

const CabCompareSection = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Top Paragraph */}
      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        In the era of smart mobility, convenience is everything. Whether you're heading to work, catching a flight, or exploring a new city, the cost, comfort, and reliability of your ride matter more than ever. Enter ChooseApp — the most comprehensive cab compare app designed to revolutionize your travel experience.
      </p>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        What is a Cab Compare App?
      </h2>

      {/* Short Description */}
      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        A cab compare app is a digital platform that allows users to compare various taxi service providers based on pricing, vehicle type, availability, and user ratings. It eliminates the need to switch between multiple apps to check fares, providing a centralized experience that saves both time and money.
      </p>

      {/* Toggle Button (Top) */}
      {!expanded && (
        <button
          onClick={toggleReadMore}
          className="text-blue-600 font-semibold hover:underline mb-6"
        >
          Read More
        </button>
      )}

      {/* Expanded Content */}
      {expanded && (
        <>
          <div className="mt-6 space-y-6 text-base">
            <h3 className="font-bold text-xl">Why ChooseApp is the Best Cab Compare App</h3>
            <p>ChooseApp isn’t just any cab compare app. It’s a smart travel companion that:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Aggregates real-time data from leading cab providers</li>
              <li>Offers comprehensive cab comparison and taxi compare features</li>
              <li>Ensures transparency in compare taxi prices with zero hidden charges</li>
              <li>Empowers users with intelligent filters for budget, comfort, and ride type</li>
            </ul>

            <p>The cab compare app interface is simple, intuitive, and designed for both tech-savvy users and casual riders...</p>

            <h3 className="font-semibold text-lg">Compare Taxi Prices in Real-Time</h3>
            <p>With ChooseApp, you can compare taxi prices instantly...</p>

            <p className="font-medium">Imagine checking the cab price comparison for a ride from your office to the airport:</p>
            <ul className="list-disc list-inside">
              <li>Economy Ride: ₹220</li>
              <li>Premium Cab: ₹420</li>
              <li>Pooling Option: ₹180</li>
            </ul>

            <h3 className="font-semibold text-lg">How the Cab Comparison Feature Works</h3>
            <p>ChooseApp’s cab comparison technology works seamlessly in the background...</p>

            <h3 className="font-semibold text-lg">One App. Many Benefits. Why ChooseApp?</h3>
            <ul className="list-disc list-inside">
              <li>Real-Time Price Comparison</li>
              <li>All-in-One Aggregator</li>
              <li>User-Centric Design</li>
              <li>Future-Ready</li>
            </ul>

            <h3 className="font-bold text-xl">Best Cab Booking App in India</h3>
            <ul className="list-disc list-inside">
              <li>Regional language support</li>
              <li>UPI, wallet, and card payment integrations</li>
              <li>24/7 support</li>
              <li>Local deals and cashback offers</li>
            </ul>

            <h3 className="font-bold text-xl">Best Taxi Booking App for Smart Travelers</h3>
            <p>Being the best taxi booking app in India means more than just showing fares...</p>

            <h3 className="font-bold text-xl">Cab Aggregator with a Difference</h3>
            <p>ChooseApp’s vision is broader. We're creating an ecosystem that supports...</p>

            <h3 className="font-bold text-xl">The Future of Online Car Booking Apps</h3>
            <p>The online car booking app space is crowded, but ChooseApp stands out...</p>

            <h3 className="font-bold text-xl">How to Get Started with ChooseApp</h3>
            <ul className="list-decimal list-inside">
              <li>Download the ChooseApp</li>
              <li>Enter your travel details</li>
              <li>Instantly get a cab comparison list</li>
              <li>Choose and book</li>
            </ul>

            <h3 className="font-bold text-xl">Why ChooseApp is Revolutionizing the Way You Compare Taxi Prices</h3>
            <p>ChooseApp brings a fresh perspective to the cab compare app landscape...</p>

            <h3 className="font-bold text-xl">ChooseApp: Your Partner in Smart Travel Planning</h3>
            <p>ChooseApp is thoughtfully designed for personalized cab comparison...</p>

            <h3 className="font-bold text-xl">Going Beyond the Basics: Taxi Compare Made Effortless</h3>
            <p>Other apps may simply display prices, but ChooseApp offers...</p>

            <h3 className="font-bold text-xl">Best Cab Booking App for Personalized Rides</h3>
            <p>ChooseApp learns your preferences and curates results...</p>

            <h3 className="font-bold text-xl">Advanced Cab Aggregator for Urban Explorers</h3>
            <p>ChooseApp is crafted for urban adventurers...</p>

            <h3 className="font-bold text-xl">Simplifying Transportation with the Most Versatile Cab Compare App</h3>
            <p>Modern travelers expect speed, transparency, reliability...</p>

            <h3 className="font-bold text-xl">ChooseApp: Leading the Evolution of Online Car Booking Apps</h3>
            <p>ChooseApp’s innovation in online car booking includes...</p>

            <h3 className="font-bold text-xl">The Ultimate Cab Comparison Strategy</h3>
            <ul className="list-decimal list-inside">
              <li>Launch ChooseApp</li>
              <li>Enter location details</li>
              <li>Get cab insights</li>
              <li>Review beyond price</li>
              <li>Select and book</li>
            </ul>

            <h3 className="font-bold text-xl">Final Thoughts: Compare Cab Prices Smartly with ChooseApp</h3>
            <p>ChooseApp is your trusted travel partner...</p>
          </div>

          {/* Read Less Button */}
          <button
            onClick={toggleReadMore}
            className="text-blue-600 font-semibold hover:underline mt-4"
          >
            Read Less
          </button>
        </>
      )}

      {/* Airport / Outstation Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 text-center text-lg text-gray-900 font-medium">
        <div>Airport Cabs Delhi</div>
        <div>Airport Cabs Mumbai</div>
        <div>Airport Cabs Bangalore</div>
        <div>Outstation Cabs Mumbai</div>
        <div>Outstation Cabs Delhi</div>
        <div>Outstation Cabs Bangalore</div>
      </div>
    </div>
  );
};

export default CabCompareSection;
