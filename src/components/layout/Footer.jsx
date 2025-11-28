// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// // Modal Component
// const Modal = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
//         <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
//           <h2 className="text-xl font-bold text-gray-800">{title}</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 transition duration-300"
//           >
//             <i className="fas fa-times text-xl"></i>
//           </button>
//         </div>
//         <div className="px-6 py-4 overflow-y-auto max-h-[calc(80vh-59px)]">
//           {children}
//         </div>
//         <div className="border-t border-gray-200 px-6 py-2 bg-gray-50">
//           <button
//             onClick={onClose}
//             className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition duration-300"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Scroll to Top Button Component
// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false)

//   // Show button when page is scrolled down
//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true)
//     } else {
//       setIsVisible(false)
//     }
//   }

//   // Scroll to top smoothly
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     })
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility)
//     return () => {
//       window.removeEventListener('scroll', toggleVisibility)
//     }
//   }, [])

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`fixed w-12 h-12 bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
//       }`}
//       aria-label="Scroll to top"
//     >
//       <i className="fas fa-chevron-up text-lg"></i>
//     </button>
//   )
// }

// const Footer = () => {
//   const [activeModal, setActiveModal] = useState(null)

//   const openModal = (modalName) => setActiveModal(modalName)
//   const closeModal = () => setActiveModal(null)

//   return (
//     <>
//       <footer className="navy-blue bg-navy-blue text-white py-10 relative">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {/* ... (your existing footer content remains the same) ... */}
//             <div>
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
//                   <img
//                     src="./images/CEO.png"
//                     alt="Founder"
//                     className="w-full h-full object-cover object-top"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start">
//               <div className="flex items-center space-x-2">
//                 <img
//                   src="./images/logo.png"
//                   alt="Anand Logo"
//                   className="w-8 h-10 md:w-10 md:h-12 object-contain pl-2"
//                 />
//                 <div className="flex flex-col items-start">
//                   <h1 className="text-lg md:text-xl font-bold text-white-800">
//                     <span className="text-orange-500">ANAND </span>INFRA
//                   </h1>
//                   <p className="text-xs text-gray-300 italic mt-1">
//                     "Dharmo Rakshati Rakshitah"
//                   </p>
//                 </div>
//               </div>
//             </div>
                
//               </div>
//               <p className="text-gray-300 mb-6 text-sm">
//                 Creating infrastructure that endures for generations—strong, precise, and timeless.
//               </p>
//               <div className="flex space-x-4">
//                 <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
//                   <i className="fab fa-facebook-f"></i>
//                 </Link>
//                 <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
//                   <i className="fab fa-twitter"></i>
//                 </Link>
//                 <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
//                   <i className="fab fa-linkedin-in"></i>
//                 </Link>
//                 <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
//                   <i className="fab fa-instagram"></i>
//                 </Link>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold mb-6 lg:text-left sm:text-left">Quick Links</h3>
//               <ul className="space-y-3 text-sm lg:text-left sm:text-left">
//                 <li><Link to="/" className="text-gray-300 hover:text-amber-500 transition duration-300">Home</Link></li>
//                 <li><Link to="/about" className="text-gray-300 hover:text-amber-500 transition duration-300">About</Link></li>
//                 <li><Link to="/projects" className="text-gray-300 hover:text-amber-500 transition duration-300">Projects</Link></li>
//                 <li><Link to="/contact" className="text-gray-300 hover:text-amber-500 transition duration-300">Contact</Link></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold mb-6">Our Services</h3>
//               <ul className="space-y-3 text-sm">
//                 <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Commercial Complexes</Link></li>
//                 <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Residential Townships</Link></li>
//                 <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Industrial Structures</Link></li>
//                 <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Public Infrastructure</Link></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold mb-6">Connect</h3>
//               <div className="space-y-3 mb-4 text-sm">
//                 <div className="flex items-start space-x-3">
//                   <i className="fas fa-map-marker-alt text-amber-500 mt-1" />
//                   <span className="text-gray-300">
//                     H.No. 131/A, 2nd Floor, MLA Colony, <br />
//                     Beside Vamsiram Banjara Abodes,<br />
//                     Road No.12, Lane 14, Banjara Hills,<br /> Hyderabad-500034.
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <i className="fas fa-phone text-amber-500" />
//                   <span className="text-gray-300">+91 1800 123 4567</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <i className="fas fa-envelope text-amber-500" />
//                   <span className="text-gray-300">info@anandinfra.com</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-blue-800 pt-8 mt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//               <p className="text-gray-400 text-sm">
//                 &copy; 2025 Anand Infra. All rights reserved.
//               </p>
//               <p className="text-gray-400 text-sm">
//                 &copy;Designed by <a href="https://designcareermetrics.com/" className="hover:text-amber-500 transition duration-300">Designcareermetrics</a>
//               </p>
//               <div className="flex space-x-6 text-sm">
//                 <button 
//                   onClick={() => openModal('privacy')}
//                   className="text-gray-400 hover:text-amber-500 transition-colors"
//                 >
//                   Privacy Policy
//                 </button>
//                 <button 
//                   onClick={() => openModal('terms')}
//                   className="text-gray-400 hover:text-amber-500 transition-colors"
//                 >
//                   Terms of Service
//                 </button>
//                 <button 
//                   onClick={() => openModal('sitemap')}
//                   className="text-gray-400 hover:text-amber-500 transition-colors"
//                 >
//                   Sitemap
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       <ScrollToTop />

//       {/* Privacy Policy Modal */}
//       <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
//         <div className="text-gray-700 space-y-4">
//           <p className="text-sm text-gray-600">Last updated: December 2024</p>
          
//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">1. Information We Collect</h3>
//             <p className="mb-3">
//               At Anand Infra, we collect information that helps us provide better services to our clients 
//               and improve your experience with us.
//             </p>
//             <ul className="list-disc list-inside space-y-1 ml-4">
//               <li>Contact information (name, email, phone number)</li>
//               <li>Project requirements and specifications</li>
//               <li>Communication history with our team</li>
//               <li>Website usage data through cookies</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">2. How We Use Your Information</h3>
//             <p>
//               We use collected information to:
//             </p>
//             <ul className="list-disc list-inside space-y-1 ml-4">
//               <li>Provide construction and infrastructure services</li>
//               <li>Respond to your inquiries and provide support</li>
//               <li>Send project updates and important notices</li>
//               <li>Improve our services and website experience</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">3. Data Protection</h3>
//             <p>
//               We implement security measures to protect your personal information against 
//               unauthorized access, alteration, or destruction. Your data is stored securely 
//               and accessed only by authorized personnel.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">4. Contact Us</h3>
//             <p>
//               For any privacy-related questions, contact us at:<br />
//               <strong>Email:</strong> privacy@anandinfra.com<br />
//               <strong>Phone:</strong> +91 1800 123 4567
//             </p>
//           </div>
//         </div>
//       </Modal>

//       {/* Terms of Service Modal */}
//       <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms of Service">
//         <div className="text-gray-700 space-y-4">
//           <p className="text-sm text-gray-600">Effective Date: December 2024</p>
          
//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">1. Services Provided</h3>
//             <p>
//               Anand Infra provides construction and infrastructure development services including 
//               commercial complexes, residential townships, industrial structures, and public infrastructure projects.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">2. Project Agreements</h3>
//             <p className="mb-3">
//               All construction projects are governed by separate project agreements that specify:
//             </p>
//             <ul className="list-disc list-inside space-y-1 ml-4">
//               <li>Project scope and deliverables</li>
//               <li>Timeline and milestones</li>
//               <li>Payment terms and schedule</li>
//               <li>Quality standards and warranties</li>
//               <li>Change order procedures</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">3. Intellectual Property</h3>
//             <p>
//               All architectural designs, construction plans, and project documentation remain 
//               the intellectual property of Anand Infra until full payment is received and 
//               project completion.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">4. Limitation of Liability</h3>
//             <p>
//               Anand Infra's liability is limited to the terms outlined in individual project 
//               contracts. We are not liable for delays caused by force majeure events including 
//               weather conditions, government regulations, or other unforeseen circumstances.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">5. Governing Law</h3>
//             <p>
//               These terms are governed by the laws of India. Any disputes shall be subject 
//               to the exclusive jurisdiction of courts in Hyderabad.
//             </p>
//           </div>
//         </div>
//       </Modal>

//       {/* Sitemap Modal */}
//       <Modal isOpen={activeModal === 'sitemap'} onClose={closeModal} title="Website Sitemap">
//         <div className="text-gray-700">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="font-semibold text-lg mb-3 text-gray-800 border-b pb-2">Main Pages</h3>
//               <ul className="space-y-2">
//                 <li><Link to="/" className="text-amber-600 hover:text-amber-700 transition duration-300">Home</Link></li>
//                 <li><Link to="/about" className="text-amber-600 hover:text-amber-700 transition duration-300">About Us</Link></li>
//                 <li><Link to="/projects" className="text-amber-600 hover:text-amber-700 transition duration-300">Our Projects</Link></li>
//                 <li><Link to="/services" className="text-amber-600 hover:text-amber-700 transition duration-300">Services</Link></li>
//                 <li><Link to="/contact" className="text-amber-600 hover:text-amber-700 transition duration-300">Contact Us</Link></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg mb-3 text-gray-800 border-b pb-2">Services</h3>
//               <ul className="space-y-2">
//                 <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Commercial Complexes</Link></li>
//                 <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Residential Townships</Link></li>
//                 <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Industrial Structures</Link></li>
//                 <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Public Infrastructure</Link></li>
//                 <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Project Consultancy</Link></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg mb-3 text-gray-800 border-b pb-2">Company</h3>
//               <ul className="space-y-2">
//                 <li><Link to="/leadership" className="text-amber-600 hover:text-amber-700 transition duration-300">Leadership</Link></li>
//                 <li><Link to="/careers" className="text-amber-600 hover:text-amber-700 transition duration-300">Careers</Link></li>
//                 <li><Link to="/news" className="text-amber-600 hover:text-amber-700 transition duration-300">News & Updates</Link></li>
//                 <li><Link to="/sustainability" className="text-amber-600 hover:text-amber-700 transition duration-300">Sustainability</Link></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg mb-3 text-gray-800 border-b pb-2">Legal</h3>
//               <ul className="space-y-2">
//                 <li><button onClick={() => openModal('privacy')} className="text-amber-600 hover:text-amber-700 transition duration-300">Privacy Policy</button></li>
//                 <li><button onClick={() => openModal('terms')} className="text-amber-600 hover:text-amber-700 transition duration-300">Terms of Service</button></li>
//                 <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Cookie Policy</Link></li>
//                 <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Disclaimer</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </>
//   )
// }

// export default Footer

























import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition duration-300"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <div className="px-6 py-4 overflow-y-auto max-h-[calc(80vh-59px)]">
          {children}
        </div>
        <div className="border-t border-gray-200 px-6 py-2 bg-gray-50">
          <button
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

// Scroll to Top Button Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed w-12 h-12 bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <i className="fas fa-chevron-up text-lg"></i>
    </button>
  )
}

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null)
  const currentYear = new Date().getFullYear()

  const openModal = (modalName) => setActiveModal(modalName)
  const closeModal = () => setActiveModal(null)

  // Modal content
  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">At Anand Infra, we are committed to protecting your privacy and ensuring the security of your personal and project information.</p>
         
          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Information We Collect</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Personal and business contact information</li>
            <li>Project requirements and specifications</li>
            <li>Communication history with our team</li>
            <li>Website usage data through cookies</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">How We Use Your Information</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>To provide construction and infrastructure services</li>
            <li>To respond to your inquiries and provide support</li>
            <li>To send project updates and important notices</li>
            <li>To improve our services and website experience</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Data Protection & Security</h3>
          <p class="text-gray-700 text-base leading-relaxed">We implement security measures to protect your personal information against unauthorized access, alteration, or destruction. Your data is stored securely and accessed only by authorized personnel.</p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">For any questions about our privacy practices, please contact us at <span class="text-amber-600 font-medium">privacy@anandinfra.com</span></p>
        </div>
      `
    },
    terms: {
      title: "Terms of Service",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">Welcome to Anand Infra. By using our construction and infrastructure services, you agree to these terms and conditions.</p>
         
          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Service Agreement</h3>
          <p class="text-gray-700 text-base leading-relaxed">All construction projects are governed by separate project agreements that specify project scope, timeline, payment terms, and quality standards.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Project Execution</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>All projects follow established construction standards and regulations</li>
            <li>Proper permits and approvals are obtained before commencement</li>
            <li>Quality control measures are implemented throughout the project lifecycle</li>
            <li>Change orders require written approval from both parties</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Warranty & Support</h3>
          <p class="text-gray-700 text-base leading-relaxed">We offer comprehensive warranties on our construction work as specified in individual project contracts. Support and maintenance services are available post-completion.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Payment Terms</h3>
          <p class="text-gray-700 text-base leading-relaxed">Payment schedules are outlined in project agreements. Late payments may result in project delays or suspension of services.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Limitation of Liability</h3>
          <p class="text-gray-700 text-base leading-relaxed">Anand Infra's liability is limited to the terms outlined in individual project contracts. We are not liable for delays caused by force majeure events including weather conditions, government regulations, or other unforeseen circumstances.</p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
        </div>
      `
    },
    copyright: {
      title: "Copyright Notice",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700 text-base leading-relaxed">All content on the Anand Infra website is protected by copyright and other intellectual property laws.</p>
         
          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Copyright Ownership</h3>
          <p class="text-gray-700 text-base leading-relaxed">Unless otherwise stated, Anand Infra owns the copyright for all content on this website, including:</p>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Website design, layout, and user interface</li>
            <li>Written content, service descriptions, and documentation</li>
            <li>Logos, branding materials, and marketing content</li>
            <li>Project portfolios and case studies</li>
            <li>Architectural designs and construction plans</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Permitted Use</h3>
          <p class="text-gray-700 text-base leading-relaxed">You may view and download content for personal, non-commercial use only. Any other use requires prior written permission from Anand Infra.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Prohibited Actions</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Reproducing content for commercial purposes</li>
            <li>Modifying or creating derivative works of our designs</li>
            <li>Using our branding without authorization</li>
            <li>Scraping or automated data collection from our platforms</li>
          </ul>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Trademarks</h3>
          <p class="text-gray-700 text-base leading-relaxed">"Anand Infra" and the company logo are registered trademarks. Unauthorized use is strictly prohibited.</p>

          <h3 class="font-bold text-amber-700 text-lg mt-6 mb-3">Copyright Infringement</h3>
          <p class="text-gray-700 text-base leading-relaxed">If you believe your work has been copied in a way that constitutes copyright infringement, please contact us at <span class="text-amber-600 font-medium">legal@anandinfra.com</span> with detailed information.</p>

          <p class="text-gray-700 text-base leading-relaxed mt-6">© ${currentYear} Anand Infra. All rights reserved.</p>
        </div>
      `
    }
  };

  return (
    <>
      <footer className="bg-navy-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Company Info - Updated Logo Section */}
            <div className="space-y-4 sm:space-y-4">
              <div className="flex flex-row items-start sm:items-center space-y-3 space-x-2 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <img src='/images/logo.png' alt="logo" className='w-full p-2 sm:p-4' />
                  </div>
                </div>
                <div className="flex flex-row items-baseline space-x-1 sm:space-x-2">
                  <div className="text-xl sm:text-2xl font-bold text-orange-500">ANAND</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">INFRA</div>
                </div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Creating infrastructure that endures for generations strong, precise, and timeless.
              </p>
              <div className="flex space-x-3 sm:space-x-4 pt-2">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-light-navy rounded-full flex items-center justify-center hover:bg-white hover:text-navy-blue transition-all duration-300">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-light-navy rounded-full flex items-center justify-center hover:bg-white hover:text-navy-blue transition-all duration-300">
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-light-navy rounded-full flex items-center justify-center hover:bg-white hover:text-navy-blue transition-all duration-300">
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-light-navy rounded-full flex items-center justify-center hover:bg-white hover:text-navy-blue transition-all duration-300">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-amber-500">Quick Links</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors block py-1">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors block py-1">About</Link></li>
                <li><Link to="/projects" className="text-gray-300 hover:text-amber-500 transition-colors block py-1">Projects</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-amber-500 transition-colors block py-1">Contact</Link></li>
              </ul>
            </div>
            
            {/* Our Services */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-amber-500">Our Services</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition-colors block py-1">Commercial Complexes</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition-colors block py-1">Residential Townships</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition-colors block py-1">Industrial Structures</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition-colors block py-1">Public Infrastructure</Link></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-amber-500">Contact Info</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">
                    H.No. 131/A, 2nd Floor, MLA Colony, Beside Vamsiram Banjara Abodes, Road No.12, Lane 14, Banjara Hills, Hyderabad-500034.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-all">info@anandinfra.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+91 1800 123 4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section - Updated Privacy Section */}
          <div className="border-t border-blue-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                &copy; {currentYear} Anand Infra. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                &copy;Designed by{' '}
                <a
                  href="https://designcareermetrics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  Designcareermetrics
                </a>
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <button className="text-gray-400 hover:text-amber-500 transition-colors whitespace-nowrap" onClick={() => openModal('privacy')}>
                  Privacy Policy
                </button>
                <button className="text-gray-400 hover:text-amber-500 transition-colors whitespace-nowrap" onClick={() => openModal('terms')}>
                  Terms of Service
                </button>
                <button className="text-gray-400 hover:text-amber-500 transition-colors whitespace-nowrap" onClick={() => openModal('copyright')}>
                  Copyright
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Privacy Policy Modal */}
      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <div dangerouslySetInnerHTML={{ __html: modalContent.privacy.content }} />
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms of Service">
        <div dangerouslySetInnerHTML={{ __html: modalContent.terms.content }} />
      </Modal>

      {/* Sitemap Modal */}
      <Modal isOpen={activeModal === 'sitemap'} onClose={closeModal} title="Website Sitemap">
        <div className="text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800 border-b pb-2">Main Pages</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-amber-600 hover:text-amber-700 transition duration-300">Home</Link></li>
                <li><Link to="/about" className="text-amber-600 hover:text-amber-700 transition duration-300">About Us</Link></li>
                <li><Link to="/projects" className="text-amber-600 hover:text-amber-700 transition duration-300">Our Projects</Link></li>
                <li><Link to="/services" className="text-amber-600 hover:text-amber-700 transition duration-300">Services</Link></li>
                <li><Link to="/contact" className="text-amber-600 hover:text-amber-700 transition duration-300">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800 border-b pb-2">Services</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Commercial Complexes</Link></li>
                <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Residential Townships</Link></li>
                <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Industrial Structures</Link></li>
                <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Public Infrastructure</Link></li>
                <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Project Consultancy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800 border-b pb-2">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/leadership" className="text-amber-600 hover:text-amber-700 transition duration-300">Leadership</Link></li>
                <li><Link to="/careers" className="text-amber-600 hover:text-amber-700 transition duration-300">Careers</Link></li>
                <li><Link to="/news" className="text-amber-600 hover:text-amber-700 transition duration-300">News & Updates</Link></li>
                <li><Link to="/sustainability" className="text-amber-600 hover:text-amber-700 transition duration-300">Sustainability</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800 border-b pb-2">Legal</h3>
              <ul className="space-y-2">
                <li><button onClick={() => openModal('privacy')} className="text-amber-600 hover:text-amber-700 transition duration-300">Privacy Policy</button></li>
                <li><button onClick={() => openModal('terms')} className="text-amber-600 hover:text-amber-700 transition duration-300">Terms of Service</button></li>
                <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Cookie Policy</Link></li>
                <li><Link to="#" className="text-amber-600 hover:text-amber-700 transition duration-300">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>

      {/* Copyright Modal */}
      <Modal isOpen={activeModal === 'copyright'} onClose={closeModal} title="Copyright Notice">
        <div dangerouslySetInnerHTML={{ __html: modalContent.copyright.content }} />
      </Modal>
    </>
  )
}

export default Footer