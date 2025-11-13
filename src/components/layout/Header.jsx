// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const location = useLocation()

//   const isActive = (path) => location.pathname === path

//   return (
//     <header className="navy-blue bg-navy-blue text-white sticky top-0 z-50 shadow-lg">  
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="h-12 w-12 rounded-full flex items-center justify-center mr-3">
//               <img src="./images/CEO.png" alt="Anand Infra Logo" className="h-13 w-13 rounded-full mr-3 object-top object-cover transition-transform duration-300" />
//             </div>
//             <div className="h-12 w-12 rounded-full flex items-center justify-center mr-3">
//               <img src="./images/logo.png" alt="Anand Infra Logo" className="h-13 w-10" />
//             </div>
//             <Link to="/" className="text-xl font-bold hover:opacity-90 transition-opacity duration-300">
//               <span className='text-amber-500'>ANAND</span> INFRA
//             </Link>
//           </div>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-3">
//             <Link 
//               to="/" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/') 
//                   ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
//                   : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/about" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/about') 
//                   ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
//                   : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//             >
//               About
//             </Link>
//             <Link 
//               to="/projects" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/projects') 
//                   ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
//                   : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//             >
//               Projects
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/contact') 
//                   ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
//                   : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//             >
//               Contact
//             </Link>
//           </nav>
          
//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-white p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300" 
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
//                   ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
//                   : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/about" 
//               className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
//                 isActive('/about') 
//                   ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
//                   : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link 
//               to="/projects" 
//               className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
//                 isActive('/gallery') 
//                   ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
//                   : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
//               }`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Projects
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
//                 isActive('/contact') 
//                   ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
//                   : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
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













import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="navy-blue bg-navy-blue text-white sticky top-0 z-50 shadow-lg">  
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
              <img 
                src="./images/CEO.png" 
                alt="Anand Infra CEO" 
                className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110" 
              />
            </div>
            <div className="h-13 w-12 overflow-hidden mr-3">
              <img 
                src="./images/logo.png" 
                alt="Anand Infra Logo" 
                className="h-13 w-10 " 
              />
            </div>
            <Link to="/" className="text-xl font-bold hover:opacity-90 transition-opacity duration-300">
              <span className='text-amber-500'>ANAND</span> INFRA
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3">
            <Link 
              to="/" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/projects') 
                  ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100 pt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-3 pb-2">
            <Link 
              to="/" 
              className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/projects') 
                  ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-amber-300 bg-amber-500 bg-opacity-10' 
                  : 'hover:text-amber-300 hover:bg-white hover:bg-opacity-5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header