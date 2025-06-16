import React from "react";
 // replace with your actual logo

const links = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT US", href: "#about" },
  { name: "OUR PARTNERS", href: "#partners" },
  { name: "PARTNER+", href: "#partnerplus" },
  { name: "INVESTORS", href: "#investors" },
  { name: "PRESS", href: "#press" },
  { name: "BLOG", href: "#blog" },
  { name: "CAREERS", href: "#careers" },
  { name: "CONTACT US", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="bg-[#003575] px-8 py-10 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Images/ChooseApp-logo.jpg" alt="ChooseApp Logo" className="w-50 h-10" />
          
        </div>

        {/* Links */}
        <div className="flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-normal text-lg hover:text-orange-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
