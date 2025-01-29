"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const Partners = () => {
  const partners = [
    {
      name: 'BLADE ENERGY PARTNERS',
      country: 'USA',
      description: 'Blade is an independent consulting group that focuses on resolving the challenges of complex projects engineering and delivery for upstream oil and gas industry across the globe. Blade has successfully delivered projects working with industry leaders on various engineering, research, and development projects.',
      website: 'https://www.blade-energy.com',
      image: 'https://i.imgur.com/hkp94Pf.png'
    },
    {
      name: 'CLONESKILLS',
      country: 'USA',
      description: 'CloneSkills is our partner in developing AI and Big Data solutions for the upstream oil and gas industry. Their platform integrates IIoT and AI to provide measurable business value, leveraging cutting-edge machine learning and deep learning models.',
      website: 'https://www.youtube.com/Cloneskils',
      image: 'https://i.imgur.com/2XOSYvp.png'
    },
    {
      name: 'EXPERFY AND HARVARD INNOVATION LAB',
      country: 'USA',
      description: 'Telesto Energy works closely with Experfy fostered by Harvard Innovation Lab to develop big data and AI-driven solutions. Experfy is an intellectual powerhouse for managing projects from roadmaps to data integration and algorithm development.',
      website: 'https://www.experfy.com',
      image: 'https://i.imgur.com/yWgrIT2.png'
    },
    {
      name: 'INDIAN INSTITUTE OF TECHNOLOGY (ISM)',
      country: 'INDIA',
      description: 'Telesto Energy collaborates with IIT(ISM) to improve productivity in mature oil fields using AI, BDA, and IIoT. IIT-ISM, founded in 1926, is a premier institute and a hub for research in oil and gas.',
      website: 'https://www.iitism.ac.in',
      image: 'https://i.imgur.com/QmOmAxe.png'
    },
    {
      name: 'NEXT INC.',
      country: 'INDIA',
      description: 'NEXT provides customized IT solutions to improve operational efficiencies across various industries, deploying new technology initiatives in a cost-effective manner, with cloud-based solutions for businesses.',
      website: 'https://www.nexttechnosolutions.com',
      image: 'https://i.imgur.com/H8NteS2.png'
    },
    {
      name: 'SIEMENS',
      country: 'SINGAPORE',
      description: 'Siemens collaborates with Telesto Energy on oil and gas projects in the Indian market. Siemens is a global leader in automation, electrification, and process solutions for the oil and gas industry.',
      website: 'https://www.siemens.com/sg',
      image: 'https://i.imgur.com/hFyRxtw.png'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Heading with Framer Motion animation */}
      <div className="flex items-start justify-center py-16">
        <motion.h1
          className="text-5xl font-['Roboto'] font-bold"
          initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
          animate={{ opacity: 1, y: 0 }}  // Final state: visible and in place
          transition={{ duration: 0.8 }}   // Animation duration
        >
          <span className="text-black">Alliance</span> 
          <span className="text-blue-500"> & Partners</span>
        </motion.h1>
      </div>

      {/* Partner Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6 py-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs bg-white rounded-lg shadow-md overflow-hidden border"
            initial={{ opacity: 0, y: 50 }} // Start hidden and below
            animate={{ opacity: 1, y: 0 }}  // End visible and in place
            transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation for each card
          >
            <div className="p-5">
              {/* Partner Image */}
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-black">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.country}</p>
              <p className="mt-3 text-gray-800">{partner.description}</p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500"
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
