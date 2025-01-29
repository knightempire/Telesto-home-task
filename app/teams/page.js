"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion

const Team = () => {
  const teamMembers = {
    advisors: [
      { name: 'Gautam Sen', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/05/Gautam.jpg' },
      { name: 'Jothi Periyasamy', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/07/jothi.jpg' },
      { name: 'Oliver Torres', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/05/advisory.png' },
      { name: 'P Satyanarayana', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/07/satya-pratha.jpg' },
      { name: 'Siva Kumar Babu', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/05/sivakumar.jpg' },
      { name: 'Giridhar Kumar', image: 'https://www.telestoenergy.com/wp-content/uploads/2018/04/Giridhar_teles.jpg' },
    ],
    core: [
      { name: 'Rajeshwaran Dandapani', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/07/RAJESH.jpg', role: 'Director - Geophysics' },
      { name: 'Aditya Kumar', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/07/ADITYA.jpg', role: 'Director - Petroleum Engineering' },
      { name: 'Sara Bakdi', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/07/sara.jpg', role: 'Country Manager - Algeria' },
      { name: 'Shrikant Rao', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/07/SHRIKANT.jpg', role: 'Business CORE TEAM Manager - India' },
      { name: 'Amit Kumar Ray', image: 'https://www.telestoenergy.com/wp-content/uploads/2018/06/amit.jpg', role: 'Geophysicist' },
    ],
    consultants: [
      { name: 'S S Radhakrishnan', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/05/radhakrishnan.jpg', role: 'Production & Facilities' },
      { name: 'Arvind Shetty', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/08/arvind.jpg', role: 'Contracts & Procurement' },
      { name: 'Somen Mishra', image: 'https://www.telestoenergy.com/wp-content/uploads/2017/09/somen-mishra.jpg', role: 'Geologist' },
    ],
  };

  // Set initial category to 'advisors'
  const [activeCategory, setActiveCategory] = useState('advisors');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Heading with Framer Motion animation */}
      <div className="flex items-start justify-center py-16">
        <motion.h1
          className="text-5xl font-['Roboto'] font-bold"
          initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
          animate={{ opacity: 1, y: 0 }}  // Final state: visible and in place
          transition={{ duration: 0.8 }}   // Animation duration
        >
          <span className="text-black">Our</span>
          <span className="text-blue-500"> Team</span>
        </motion.h1>
      </div>

      {/* Category Pills */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-0 rounded-full border-2 border-gray-500 bg-gray-500">
          <button
            className={`px-6 py-2 rounded-l-full text-white ${activeCategory === 'advisors' ? 'bg-blue-600' : 'bg-gray-500'}`}
            onClick={() => setActiveCategory('advisors')}
          >
            Advisors
          </button>
          <button
            className={`px-6 py-2 text-white ${activeCategory === 'core' ? 'bg-blue-600' : 'bg-gray-500'}`}
            onClick={() => setActiveCategory('core')}
          >
            Core Team
          </button>
          <button
            className={`px-6 py-2 rounded-r-full text-white ${activeCategory === 'consultants' ? 'bg-blue-600' : 'bg-gray-500'}`}
            onClick={() => setActiveCategory('consultants')}
          >
            Consultants
          </button>
        </div>
      </div>

      {/* Team Members Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {teamMembers[activeCategory].map((member, index) => (
          <div key={index} className="group flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href={member.link}>
              <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={member.image} alt="product image" />
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href={member.link}>
                <h5 className="text-xl tracking-tight text-slate-900">{member.name}</h5>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
