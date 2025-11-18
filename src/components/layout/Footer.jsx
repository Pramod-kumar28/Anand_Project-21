import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="navy-blue bg-navy-blue text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className=" h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <img src="./images/logo.png" alt="" />
              </div>
              <h2 className="text-xl font-bold"><span className='text-amber-500'>ANAND</span> INFRA</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Creating infrastructure that endures for generations—strong, precise, and timeless.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-amber-500 transition duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-500 transition duration-300">About</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-amber-500 transition duration-300">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-500 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Commercial Complexes</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Residential Townships</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Industrial Structures</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Public Infrastructure</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800" />
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 rounded-r-lg transition duration-300">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Anand Group. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              &copy;Developed by <a href="designcareermetrics.com">Designcareermetrics.com</a>
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</a>
              <a href="" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</a>
              <a href="" className="text-gray-400 hover:text-gold transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer