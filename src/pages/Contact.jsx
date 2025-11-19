import React, { useState } from 'react'
import { useAnimation } from '../hooks/useAnimation'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  useAnimation()
  
  const faqs = [
    {
      question: 'What types of projects does Anand Infra undertake?',
      answer: 'We handle a wide spectrum of development including commercial complexes, residential townships, industrial structures, warehouses, layout development, public utilities, community infrastructure, and large-scale construction projects.'
    },
    {
      question: 'Do you incorporate Vastu principles in your designs?',
      answer: 'Yes, we integrate Vastu-aligned design principles in all our projects to ensure balance, harmony, and positive energy flow. We blend these ancient principles with modern scientific planning for optimal results.'
    },
    {
      question: 'What is your approach to quality control?',
      answer: 'We implement strict quality control measures at every stage of development. Our multi-stage inspection protocol ensures that every project meets our high standards for materials, workmanship, and safety before delivery.'
    },
    {
      question: 'How long does a typical project take to complete?',
      answer: 'Project timelines vary based on scope and complexity. A residential project might take 12-24 months, while large commercial or industrial developments can take 2-4 years. We provide detailed timelines during the consultation phase and pride ourselves on timely delivery.'
    },
    {
      question: 'Do you offer post-construction support?',
      answer: 'Absolutely. We provide comprehensive post-construction support and maintenance services. All our projects come with warranty coverage, and we offer ongoing maintenance contracts to ensure your infrastructure continues to perform optimally for years to come.'
    }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const contactCards = [
    {
      icon: 'map-marker-alt',
      title: 'Visit Our Office',
      content: 'Anand Infra Headquarters, Plot No. 45, Road No. 14, Jubilee Hills, Hyderabad, Telangana - 500033',
      gradient: 'from-blue-500 to-cyan-500',
      details: 'Plot No. 45, Road No. 14, Jubilee Hills, Hyderabad, Telangana - 500033'
    },
    {
      icon: 'phone-alt',
      title: 'Call Us Directly',
      content: 'Speak with our project consultants for immediate assistance and project discussions',
      gradient: 'from-green-500 to-emerald-500',
      details: '+91 98765 43210 & +91 40 1234 5678'
    },
    {
      icon: 'envelope',
      title: 'Email Us',
      content: 'Send us your project requirements and we will get back to you with a detailed proposal',
      gradient: 'from-amber-500 to-orange-500',
      details: 'info@anandinfra.com & projects@anandinfra.com'
    },
    {
      icon: 'clock',
      title: 'Office Hours',
      content: 'Visit us during our business hours for face-to-face consultations and project discussions',
      gradient: 'from-blue-500 to-cyan-500',
      details: 'Mon-Fri: 9:00 AM - 6:00 PM & Sat: 10:00 AM - 2:00 PM'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero text-white py-16 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Start Your Legacy Project With Us</h1>
          <p className="text-lg md:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto px-4">
            We are eager to hear about your vision and discuss how we can bring it to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header - Aligned Titles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <div className='mb-3'>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">Get In Touch</h2>
                <p className="text-gray-600 text-sm md:text-base">Multiple ways to connect with our team</p>
              </div>
              
              {/* Contact Information - Left Side */}
            <div className="space-y-4 md:space-y-6">
              {contactCards.map((card, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-gray-100 p-4 md:p-6 hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient Background Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex items-start space-x-3 md:space-x-4 h-full">
                    {/* Icon with Gradient */}
                    <div className={`bg-gradient-to-r ${card.gradient} p-3 mt-2 md:p-4 rounded-lg md:rounded-xl shadow-md md:shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <i className={`fas fa-${card.icon} text-white text-base md:text-xl`}></i>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-gray-900 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 mb-2 md:mb-3 leading-relaxed text-xs md:text-sm">
                        {card.content}
                      </p>
                      
                      {/* Contact Details */}
                      <div className="text-gray-800 font-medium text-xs md:text-sm">
                        {card.details}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            </div>
            
            <div>
              <div className='mb-3'>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">Send us a message</h2>
                <p className="text-gray-600 text-sm md:text-base">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              {/* Contact Form - Right Side */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 border border-gray-100">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 md:gap-6 mb-4 md:mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:gap-6 mb-4 md:mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="residential">Residential Project</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="industrial">Industrial Project</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6 md:mb-8">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="Tell us about your project vision, requirements, and timeline..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-sm md:text-base"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </button>
                </form>

                {/* Success Message */}
                {showSuccess && (
                  <div className="mt-4 md:mt-6 p-3 md:p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg md:rounded-xl flex items-center text-sm">
                    <i className="fas fa-check-circle text-green-500 mr-2 md:mr-3 text-lg"></i>
                    <div>
                      <p className="font-semibold">Message Sent Successfully!</p>
                      <p className="text-xs md:text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            
            
          </div>

          {/* Full Width Map Section */}
          <div className="w-full">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-gray-200 overflow-hidden">
              <iframe
                title="Anand Infra Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.444210518734!2d78.40707837499777!3d17.42741180372425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91584b4e2d9b%3A0x7f52b4cb43b1e3c!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1698500000000!5m2!1sen!2sin"
                width="100%"
                height="290"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-xl md:rounded-b-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Contact
