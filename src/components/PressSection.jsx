import React from "react";

const pressArticles = [
  {
    id: 1,
    title:
      "Tired of High Cab Fares? Compare & Book the Cheapest Ride with ChooseApp!",
    description:
      "Founded in 2024, ChooseApp is India’s first super mobility app where users can seamlessly compare prices, ratings, wait times, and reviews from various cab aggregators across India and then book the best option directly on the app.",
    image: "/Images/people.png",
    link: "https://example.com/article1",
  },
  {
    id: 2,
    title:
      "Is ChooseApp India's newest mobility disruptor? Compare and Book the Cheapest Cabs Now!",
    description:
      "ChooseApp, the game-changing platform created by media professionals, is disrupting the mobility industry with 15,000 downloads in just 10 days. The App lets you instantly compare cab prices...",
    image: "/Images/people.png",
    link: "https://example.com/article2",
  },
];

const PressSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-4">Press</h2>
      <p className="text-center text-gray-600 mb-12">
        Latest news, updates, and media coverage about ChooseApp. Stay informed
        and connected with ChooseApp as we drive innovation and convenience in
        the world of commuting.
      </p>

      {pressArticles.map((article) => (
        <div key={article.id} className="mb-16">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold mb-6 max-w-xl mx-auto text-center">
            {article.title}
          </h3>

          {/* Image + Description beside each other */}
          <div className="flex flex-col md:flex-row items-start gap-6 justify-center">
            {/* Image */}
            <img
              src={article.image}
              alt="Press"
              className="w-[350px] h-auto rounded shadow-md mx-auto md:mx-0"
            />

            {/* Description + Read More */}
            <div className="max-w-xs">
              <p className="text-gray-700 mb-2 text-lg">{article.description}</p>
              <a
                href={article.link}
                className="text-blue-600 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PressSection;
