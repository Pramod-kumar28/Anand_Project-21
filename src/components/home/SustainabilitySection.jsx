// import React from 'react';

// const SustainabilitySection = () => (
//   <section className="py-16 bg-gray-50">
//     <div className="container mx-auto px-4">
//       <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-4 fade-in">Sustainable Development</h2>
//       <p className=" text-base md:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
//         At Anand Infra, we believe that true legacy extends beyond structures to the impact we have on our environment and communities. 
//             We focus on integrating greenery and natural elements into our projects to protect and preserve nature.
//       </p>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div className="fade-in">
          
//           <div className="space-y-4">
//             {[
//               { icon: 'leaf', title: 'Green Building Integration', desc: 'We prioritize incorporating green spaces, vertical gardens, and natural elements into our designs' },
//               { icon: 'tree', title: 'Preservation of Natural Landscape', desc: 'Our projects are designed to work with the natural topography, preserving existing trees and green cover' },
//               { icon: 'recycle', title: 'Eco-Friendly Materials', desc: 'We use sustainable, locally-sourced materials and implement waste management systems' }
//             ].map((item, index) => (
//               <div key={index} className="flex items-start">
//                 <div className="bg-green-500 rounded-full object-cover object-center p-2 mr-4 mt-2">
//                   <i className={`fas fa-${item.icon} text-white text-sm`}></i>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{item.title}</h4>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="fade-in">
//           <div className="bg-gray-100 rounded-xl p-8 h-full flex items-center justify-center">
//             <div className="text-center">
//               <div className="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 pulse-slow">
//                 <i className="fas fa-seedling text-white text-4xl"></i>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">Nature-Inspired Design</h3>
//               <p className="text-gray-600">
//                 Our projects incorporate extensive greenery, natural ventilation, and daylight optimization to create healthier living environments while reducing environmental impact.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default SustainabilitySection;



























import React from 'react';
import { motion } from 'framer-motion';

const SustainabilitySection = () => {
  const sustainabilityCards = [
    {
      icon: 'leaf',
      title: 'Green Building',
      desc: 'Integrate green spaces and natural elements for eco-friendly living environments.',
      color: 'green'
    },
    {
      icon: 'tree',
      title: 'Nature Preservation',
      desc: 'Work with natural topography while preserving existing trees and green cover.',
      color: 'green'
    },
    {
      icon: 'recycle',
      title: 'Eco Materials',
      desc: 'Use sustainable materials with waste management for minimal impact on nature.',
      color: 'blue'
    },
    {
      icon: 'solar-panel',
      title: 'Energy Efficiency',
      desc: 'Implement solar systems and efficient designs to reduce carbon footprint.',
      color: 'amber'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sustainable Development
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Anand Infra, we believe that true legacy extends beyond structures to the impact we have on our environment and communities. 
          We focus on integrating greenery and natural elements into our projects to protect and preserve nature.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sustainabilityCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
            >
              <div className={`bg-${card.color}-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas fa-${card.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;