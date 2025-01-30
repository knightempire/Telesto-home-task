"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Import motion



import AnimatedSVG  from '@layouts/components/svg';


const About = () => {
  return (
    <div className="min-h-screen">
  
      {/* Heading Section */}
      <div className="flex items-center justify-center py-16">
        <motion.h1
          className="text-5xl font-['Roboto'] font-bold text-gray-800"
          whileInView={{ opacity: 1, y: 0, once: true }}  // Animate once when the element is in view
          initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
          transition={{ duration: 0.8 }}   // Animation duration
        >
          <span className="text-black">About</span> 
          <span className="text-blue-500"> Us</span>
        </motion.h1>
      </div>

      {/* About Section */}
      <motion.div 
        className="flex flex-col items-center justify-center px-6 py-12 space-y-8 md:flex-row md:space-y-0 md:px-16 lg:px-24"
        whileInView={{ opacity: 1, x: 0, once: true }}    // Animate once when the element comes into view
        initial={{ opacity: 0, x: -100 }}    // Initial state: hidden and to the left
        transition={{ duration: 1 }}         // Animation duration
      >
        <div className="text-center md:text-left md:w-2/3 space-y-6">
          <motion.h2
            className="text-3xl font-semibold text-gray-800"
            whileInView={{ opacity: 1, y: 0, once: true }}   // Animate once when the heading comes into view
            initial={{ opacity: 0, y: -30 }}     // Initial state for heading
            transition={{ duration: 0.5 }}        // Animation duration for heading
          >
            Meet Our Team
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            whileInView={{ opacity: 1, once: true }}        // Animate once when the paragraph comes into view
            initial={{ opacity: 0 }}            // Initial state for paragraph
            transition={{ duration: 0.6 }}      // Animation duration for paragraph
          >
            At Telesto Energy, we are a team of passionate professionals who are dedicated to transforming the Oil & Gas industry. Our team leverages the latest in Artificial Intelligence and Big Data Analytics to deliver innovative, cost-effective, and efficient solutions. We work together to achieve excellence in every project we undertake, making a difference in the industry.
          </motion.p>
        </div>

        <motion.div 
          className="w-full md:w-1/2 lg:w-1/3"
          whileInView={{ opacity: 1, scale: 1, once: true }}   // Animate once when the image comes into view
          initial={{ opacity: 0, scale: 0.8 }}    // Initial state for image
          transition={{ duration: 0.6 }}          // Animation duration for image
        >
        
<AnimatedSVG style={{ transform: 'scale(0.7)', height: '50%' }} />

        
        </motion.div>
      </motion.div>

      {/* Centered Image Section with Photo Frame Effect */}
      <motion.div 
        className="flex justify-center w-full py-8"
        whileInView={{ opacity: 1, scale: 1, once: true }}    // Animate once when the image comes into view
        initial={{ opacity: 0, scale: 0.8 }}      // Initial state for image
        transition={{ duration: 0.6 }}             // Animation duration for image
      >
        <div className="border-4 border-gray-300 rounded-lg p-4">
          <img
            src="https://www.telestoenergy.com/wp-content/uploads/2017/08/about.jpg"
            alt="Meet our team"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </motion.div>

      {/* CEO's Quote Section */}
      <motion.div 
        className="bg-white py-12"
        whileInView={{ opacity: 1, once: true }}  // Animate once when the section comes into view
        initial={{ opacity: 0 }}      // Initial state for the entire section
        transition={{ duration: 0.8 }} // Animation duration for the section
      >
        <motion.div 
          className="max-w-6xl mx-auto flex flex-col items-center px-6 md:flex-row md:space-x-8"
          whileInView={{ opacity: 1, y: 0, once: true }}   // Animate once when the flex container comes into view
          initial={{ opacity: 0, y: 50 }}      // Initial state for flex container
          transition={{ duration: 1 }}          // Animation duration for flex container
        >
          {/* CEO Image */}
          <motion.div 
            className="w-64 h-64 rounded-full overflow-hidden shadow-xl mb-8 md:mb-0"
            whileInView={{ opacity: 1, scale: 1, once: true }}   // Animate once when the image comes into view
            initial={{ opacity: 0, scale: 0.8 }}     // Initial state for image
            transition={{ duration: 0.5 }}           // Animation duration for image
          >
            <img
              src="https://www.telestoenergy.com/wp-content/uploads/2017/08/ceo3.jpg"
              alt="CEO, Telesto Energy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* CEO's Content */}
          <motion.div 
            className="text-center md:text-left md:w-2/3 space-y-6"
            whileInView={{ opacity: 1, y: 0, once: true }}  // Animate once when the content comes into view
            initial={{ opacity: 0, y: 50 }}     // Initial state for content
            transition={{ duration: 0.7 }}       // Animation duration for content
          >
            <motion.h2
              className="text-3xl font-semibold text-gray-800"
              whileInView={{ opacity: 1, y: 0, once: true }}  // Animate once when the heading comes into view
              initial={{ opacity: 0, y: -30 }}    // Initial state for heading
              transition={{ duration: 0.5 }}       // Animation duration for heading
            >
              Balaji Chennakrishnan
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 font-medium"
              whileInView={{ opacity: 1, once: true }}       // Animate once when the title comes into view
              initial={{ opacity: 0 }}            // Initial state for CEO title
              transition={{ duration: 0.5 }}      // Animation duration for title
            >
              CEO, Telesto Energy
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              whileInView={{ opacity: 1, once: true }}       // Animate once when the quote comes into view
              initial={{ opacity: 0 }}            // Initial state for quote
              transition={{ duration: 0.7 }}      // Animation duration for quote
            >
              “At its core, Telesto Energy is a blend of a great team, technology, and innovation. We are driven with passion to provide solutions that combine Artificial Intelligence, Big Data Analytics, and innovative approaches to conventional practices, redefining the way the Oil & Gas Industry operates.
              <br />
              <br />
              We are committed to providing solutions that are cost-effective, improve efficiency, reduce repetitive tasks, and offer great value.”
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default About;
