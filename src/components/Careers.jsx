import React from 'react';
import { Check  } from 'lucide-react';
// Adjust path as needed

const roles = [
  'Product Manager, 5-6Yrs experience',
  'Full Stack developer, 4-5Yrs experience',
  'Project Leader, 5-6Yrs experience',
  'Social Media Intern',
  'Accounts Executive',
  'Business Development Manager',
];

const Careers = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 bg-white mt-[100px]">
      <div className="md:w-1/2">
        <img
          src="/Images/hiring.png"
          alt="We're Hiring"
          className="w-full h-[400px] rounded-bl-5xl rounded-tr-3xl rounded-br-3xl shadow-md"
        />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Career</h2>
        <p className="text-lg max-w-sm font-semibold text-gray-800 mb-2">
          At ChooseApp, we are on a mission to transform urban mobility and make commuting a seamless experience for millions. We are looking for passionate, innovative, and driven individuals to join our dynamic team.
        </p>
        <p className="text-md text-gray-900 mb-6">
          Explore our career opportunities and be a part of a company that values creativity, growth, and making a real impact.
        </p>
        <ul className="space-y-3">
          {roles.map((role, index) => (
            <li key={index} className="flex items-start text-lg gap-3">
              <Check className="text-gray-900 mt-1"  strokeWidth={4}/>
              <span className="text-gray-800">{role}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Careers;
