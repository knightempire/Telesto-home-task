"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const About = () => {
  return (
    <div className="min-h-screen">

      {/* Heading Section */}
      <div className="flex items-center justify-center py-16">
        <motion.h1
          className="text-5xl font-['Roboto'] font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
          animate={{ opacity: 1, y: 0 }}  // Final state: visible and in place
          transition={{ duration: 0.8 }}   // Animation duration
        >
          <span className="text-black">About</span> 
          <span className="text-blue-500"> Us</span>
        </motion.h1>
      </div>

      {/* Meet Our Team Section */}
      <div className="flex flex-col items-center justify-center px-6 py-12 space-y-8 md:flex-row md:space-y-0 md:px-16 lg:px-24">
        
        <div className="text-center md:text-left md:w-2/3 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Telesto Energy, we are a team of passionate professionals who are dedicated to transforming the Oil & Gas industry. Our team leverages the latest in Artificial Intelligence and Big Data Analytics to deliver innovative, cost-effective, and efficient solutions. We work together to achieve excellence in every project we undertake, making a difference in the industry.
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src="https://www.telestoenergy.com/wp-content/uploads/2017/08/about.jpg"
            alt="Meet our team"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>

      {/* CEO's Quote Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center px-6 md:flex-row md:space-x-8">

          {/* CEO Image */}
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl mb-8 md:mb-0">
            <img
              src="https://www.telestoenergy.com/wp-content/uploads/2017/08/ceo3.jpg"
              alt="CEO, Telesto Energy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CEO's Content */}
          <div className="text-center md:text-left md:w-2/3 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Balaji Chennakrishnan</h2>
            <p className="text-xl text-gray-600 font-medium">CEO, Telesto Energy</p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              “At its core, Telesto Energy is a blend of a great team, technology, and innovation. We are driven with passion to provide solutions that combine Artificial Intelligence, Big Data Analytics, and innovative approaches to conventional practices, redefining the way the Oil & Gas Industry operates.
              <br />
              <br />
              We are committed to providing solutions that are cost-effective, improve efficiency, reduce repetitive tasks, and offer great value.”
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
