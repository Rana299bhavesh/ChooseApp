import React from "react";

const partners = [
  ["partner.png", "Rapido"],
  ["partner.png", "Meru"],
  ["partner.png", "Gozo Cabs"],
  ["partner.png", "Mega Cabs"],
  ["partner.png", "Avis"],
  ["partner.png", "Carzonrent"],
  ["partner.png", "MyTaxiIndia"],
  ["partner.png", "Baayu"],
  ["partner.png", "Mega Cabs 2"], // if needed
  ["partner.png", "Namma Yatri"],
  ["partner.png", "Quick Ride"],
  ["partner.png", "Yaary"],
  ["partner.png", "Yatri Sathi"],
  ["partner.png", "Ola"],
  ["partner.png", "ORickshaw"],
];

const OurPartners = () => {
  return (
    <section className="bg-gray-200 text-center py-16 px-4 md:px-12">
      <h2 className="text-4xl font-bold mb-6">Our Partners</h2>
      <p className="text-xl max-w-7xl mx-auto mb-4">
        ChooseApp is extremely proud to collaborate with the leading cab aggregators
        to bring you the best in transportation services. Our partners include
        prominent names like
        <strong> Rapido, Ola, Meru, Gozo, Mega, Carzonrent, Namma Yatri, Yatri Sathi, Yaary, Yatri, ORickshaw, Baayu, MyTaxiIndia, QuickRide, Avis </strong>
        and a host of many regional providers across India. By working together, we
        aim to deliver a seamless and comprehensive mobility experience.
      </p>
      <p className="text-xl max-w-3xl mx-auto mb-10">
        By working together, we aim to deliver a seamless and comprehensive mobility
        experience.
      </p>

      {/* Partner Logos */}
      <div className="px-4 sm:px-6 md:px-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-8 place-items-center">
        {partners.map(([image, alt], index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden flex items-center justify-center w-[150px] h-[60px]"
          >
            <img
              src={`/Images/${image}`}
              alt={alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
        ))}
      </div>
      </div>
    </section>
  );
};

export default OurPartners;
