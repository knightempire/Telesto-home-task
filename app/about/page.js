"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const about = () => {


  return (
    <div className="min-h-screen">

      <div className="flex items-start justify-center py-16">
        <motion.h1
          className="text-5xl font-['Roboto'] font-bold"
          initial={{ opacity: 0, y: -50 }} // Initial state: hidden and above
          animate={{ opacity: 1, y: 0 }}  // Final state: visible and in place
          transition={{ duration: 0.8 }}   // Animation duration
        >

          <span className="text-blue-500"> About </span>
          <span className="text-black"> Us </span> 
        </motion.h1>
      </div>


    </div>
  );
};

export default about;
