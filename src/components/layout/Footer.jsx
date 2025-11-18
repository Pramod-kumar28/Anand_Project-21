// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <footer className="navy-blue bg-navy-blue text-white py-10">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <div className="flex items-center mb-6">
//               <div className="h-14 w-14 rounded-full shadow-lg overflow-hidden mr-3">
//                 <img
//                   src="./images/CEO.png"
//                   alt="Anand Infra CEO"
//                   className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110"
//                 />
//               </div>
//               <div className=" h-10 w-10 rounded-full flex items-center justify-center mr-3">
//                 <img src="./images/logo.png" alt="" />
//               </div>
//               <h2 className="text-xl font-bold"><span className='text-amber-500'>ANAND</span> INFRA</h2>
//             </div>
//             <p className="text-gray-300 mb-6">
//               Creating infrastructure that endures for generations—strong, precise, and timeless.
//             </p>
//             <div className="flex space-x-4">
//               <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
//                 <i className="fab fa-facebook-f"></i>
//               </Link>
//               <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
//                 <i className="fab fa-twitter"></i>
//               </Link>
//               <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
//                 <i className="fab fa-linkedin-in"></i>
//               </Link>
//               <Link to="#" className="bg-light-navy hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition duration-300">
//                 <i className="fab fa-instagram"></i>
//               </Link>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               <li><Link to="/" className="text-gray-300 hover:text-amber-500 transition duration-300">Home</Link></li>
//               <li><Link to="/about" className="text-gray-300 hover:text-amber-500 transition duration-300">About</Link></li>
//               <li><Link to="/projects" className="text-gray-300 hover:text-amber-500 transition duration-300">Projects</Link></li>
//               <li><Link to="/contact" className="text-gray-300 hover:text-amber-500 transition duration-300">Contact</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-6">Our Services</h3>
//             <ul className="space-y-3">
//               <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Commercial Complexes</Link></li>
//               <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Residential Townships</Link></li>
//               <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Industrial Structures</Link></li>
//               <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Public Infrastructure</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold mb-6">Connect</h3>
//             <div className="space-y-3 mb-4 text-sm">
//               <div className="flex items-start space-x-3">
//                 <i className="fas fa-map-marker-alt text-amber-500 mt-1" />
//                 <span className="text-gray-300">
               
//                  H.No. 131/A, 2nd Floor, MLA Colony, <br />
//                  Beside Vamsiram Banjara Abodes,<br />
//                   Road No.12, Lane 14, Banjara Hills,<br /> Hyderabad-500034.
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <i className="fas fa-phone text-amber-500" />
//                 <span className="text-gray-300">+91 1800 123 4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <i className="fas fa-envelope text-amber-500" />
//                 <span className="text-gray-300">info@anandcinemaz.com</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-blue-800 pt-8 mt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-sm">
//               &copy; 2025 Anand Group. All rights reserved.
//             </p>
//             <p className="text-gray-400 text-sm">
//               &copy;Developed by <a href="https://designcareermetrics.com/">Designcareermetrics.com</a>
//             </p>
//             <div className="flex space-x-6 text-sm">
//               <a href="" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</a>
//               <a href="" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</a>
//               <a href="" className="text-gray-400 hover:text-gold transition-colors">Sitemap</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


















import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (modalName) => setActiveModal(modalName)
  const closeModal = () => setActiveModal(null)

  return (
    <>
      <footer className="navy-blue bg-navy-blue text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* ... (your existing footer content remains the same) ... */}
            <div>
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 rounded-full shadow-lg overflow-hidden mr-3">
                  <img
                    src="./images/CEO.png"
                    alt="Anand Infra CEO"
                    className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className=" h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  <img src="./images/logo.png" alt="" />
                </div>
                <div>
                  <h2 className="text-xl font-bold"><span className='text-amber-500'>ANAND</span> INFRA</h2>
                  <p className="text-gray-300 text-[10px] italic -mt-0.5">"Dharmo Rakshati Rakshitah"</p>
                </div>
                
              </div>
              <p className="text-gray-300 mb-6 text-sm">
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
              <h3 className="text-lg font-semibold mb-6 lg:text-left sm:text-left">Quick Links</h3>
              <ul className="space-y-3 text-sm lg:text-left sm:text-left">
                <li><Link to="/" className="text-gray-300 hover:text-amber-500 transition duration-300">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-amber-500 transition duration-300">About</Link></li>
                <li><Link to="/projects" className="text-gray-300 hover:text-amber-500 transition duration-300">Projects</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-amber-500 transition duration-300">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Commercial Complexes</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Residential Townships</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Industrial Structures</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-amber-500 transition duration-300">Public Infrastructure</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Connect</h3>
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt text-amber-500 mt-1" />
                  <span className="text-gray-300">
                    H.No. 131/A, 2nd Floor, MLA Colony, <br />
                    Beside Vamsiram Banjara Abodes,<br />
                    Road No.12, Lane 14, Banjara Hills,<br /> Hyderabad-500034.
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-amber-500" />
                  <span className="text-gray-300">+91 1800 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-amber-500" />
                  <span className="text-gray-300">info@anandinfra.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Anand Infra. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                &copy;Developed by <a href="https://designcareermetrics.com/" className="hover:text-amber-500 transition duration-300">Designcareermetrics</a>
              </p>
              <div className="flex space-x-6 text-sm">
                <button 
                  onClick={() => openModal('privacy')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => openModal('terms')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => openModal('sitemap')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Sitemap
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <div className="text-gray-700 space-y-4">
          <p className="text-sm text-gray-600">Last updated: December 2024</p>
          
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">1. Information We Collect</h3>
            <p className="mb-3">
              At Anand Infra, we collect information that helps us provide better services to our clients 
              and improve your experience with us.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Project requirements and specifications</li>
              <li>Communication history with our team</li>
              <li>Website usage data through cookies</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">2. How We Use Your Information</h3>
            <p>
              We use collected information to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide construction and infrastructure services</li>
              <li>Respond to your inquiries and provide support</li>
              <li>Send project updates and important notices</li>
              <li>Improve our services and website experience</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">3. Data Protection</h3>
            <p>
              We implement security measures to protect your personal information against 
              unauthorized access, alteration, or destruction. Your data is stored securely 
              and accessed only by authorized personnel.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">4. Contact Us</h3>
            <p>
              For any privacy-related questions, contact us at:<br />
              <strong>Email:</strong> privacy@anandinfra.com<br />
              <strong>Phone:</strong> +91 1800 123 4567
            </p>
          </div>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms of Service">
        <div className="text-gray-700 space-y-4">
          <p className="text-sm text-gray-600">Effective Date: December 2024</p>
          
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">1. Services Provided</h3>
            <p>
              Anand Infra provides construction and infrastructure development services including 
              commercial complexes, residential townships, industrial structures, and public infrastructure projects.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">2. Project Agreements</h3>
            <p className="mb-3">
              All construction projects are governed by separate project agreements that specify:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Project scope and deliverables</li>
              <li>Timeline and milestones</li>
              <li>Payment terms and schedule</li>
              <li>Quality standards and warranties</li>
              <li>Change order procedures</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">3. Intellectual Property</h3>
            <p>
              All architectural designs, construction plans, and project documentation remain 
              the intellectual property of Anand Infra until full payment is received and 
              project completion.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">4. Limitation of Liability</h3>
            <p>
              Anand Infra's liability is limited to the terms outlined in individual project 
              contracts. We are not liable for delays caused by force majeure events including 
              weather conditions, government regulations, or other unforeseen circumstances.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">5. Governing Law</h3>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject 
              to the exclusive jurisdiction of courts in Hyderabad.
            </p>
          </div>
        </div>
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
    </>
  )
}

export default Footer