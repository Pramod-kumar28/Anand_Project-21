// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const location = useLocation()

//   const isActive = (path) => location.pathname === path

//   return (
//     <header className="bg-white text-blue-800 sticky top-0 z-50 shadow-lg">  
//       <div className="container mx-auto px-4 py-2">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center sm:mr-0">
//             {/* Founder Logo - Rounded for both desktop and mobile */}
//             <div className="h-14 w-14 rounded-full shadow-lg overflow-hidden mr-3">
//               <img 
//                 src="./images/CEO.png" 
//                 alt="Anand Infra CEO" 
//                 className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110" 
//               />
//             </div>
            
//             {/* Company Logo */}
//             <div className="h-13 w-10 overflow-hidden mr-3">
//               <img 
//                 src="./images/logo.png" 
//                 alt="Anand Infra Logo" 
//                 className="h-full w-full object-contain" 
//               />
//             </div>
            
//             <Link to="/" className=" hover:opacity-90 transition-opacity duration-300">
              
//               <div>
//                 <h2 className="text-xl font-bold font-12"><span className='text-amber-500'>ANAND</span> INFRA</h2>
//                 <p className="text-gray-500 text-[10px] italic -mt-0.5 ">"Dharmo Rakshati Rakshitah"</p>
//               </div>
//             </Link>
//           </div>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-3">
//             <Link 
//               to="/" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/') 
//                   ? 'text-navy-blue bg-blue-500 bg-opacity-10' 
//                   : 'hover:text-blue-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/about" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/about') 
//                   ? 'text-navy-blue bg-blue-500 bg-opacity-10' 
//                   : 'hover:text-blue-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//             >
//               About
//             </Link>
//             <Link 
//               to="/projects" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/projects') 
//                   ? 'text-navy-blue bg-blue-500 bg-opacity-10' 
//                   : 'hover:text-blue-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//             >
//               Projects
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/contact') 
//                   ? 'text-navy-blue bg-blue-500 bg-opacity-10' 
//                   : 'hover:text-blue-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//             >
//               Contact
//             </Link>
//           </nav>
          
//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-navy-blue p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300" 
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden transition-all duration-300 overflow-hidden ${
//           mobileMenuOpen ? 'max-h-64 opacity-100 pt-4' : 'max-h-0 opacity-0'
//         }`}>
//           <div className="flex flex-col space-y-3 pb-2">
//             <Link 
//               to="/" 
//               className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
//                 isActive('/') 
//                   ? 'text-navy-blue bg-blue-500 bg-opacity-10' 
//                   : 'hover:text-blue-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/about" 
//               className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
//                 isActive('/about') 
//                   ? 'text-navy-blue bg-blue-500 bg-opacity-10' 
//                   : 'hover:text-blue-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link 
//               to="/projects" 
//               className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
//                 isActive('/projects') 
//                   ? 'text-navy-blue bg-blue-500 bg-opacity-10' 
//                   : 'hover:text-blue-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Projects
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
//                 isActive('/contact') 
//                   ? 'text-navy-blue bg-blue-500 bg-opacity-10' 
//                   : 'hover:text-blue-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header











import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300
      bg-white border-b
      ${isScrolled ? "shadow-md border-gray-200" : "border-gray-100"}`}
    >
      <div className="container mx-auto px-4">
        {/* Row */}
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo - Improved Mobile Alignment */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                src="./images/CEO.png"
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="./images/logo.png"
                  alt="Anand Logo"
                  className="w-8 h-10 md:w-10 md:h-12 object-contain"
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-lg md:text-xl font-bold text-blue-800">
                    <span className="text-orange-500">ANAND </span>INFRA
                  </h1>
                  <p className="text-xs text-gray-600 italic mt-1">
                    "Dharmo Rakshati Rakshitah"
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Increased Size */}
          <nav className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 ${
                  isActiveLink(item.path)
                    ? "text-blue-700 bg-blue-100 border border-blue-200"
                    : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button - Improved Size */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 md:p-3 text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Improved Alignment */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-4">
            <nav className="space-y-2 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActiveLink(item.path)
                      ? "bg-blue-100 text-blue-700 border border-blue-200"
                      : "text-blue-800 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;