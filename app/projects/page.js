"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { FaTimes } from 'react-icons/fa'; // Import Close icon

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Manage expanded state
  const projects = [
    {
      name: 'CNPC, USA',
      country: 'USA',
      description: 'HPHT Fields – Global Benchmarking Study: Blade Energy Partners Joint Project\n\nConducted study to identify the HPHT analogues for three fields- Keshen, Tazhong and Halahatang, located in Tarim basin, China. Established guidelines based on the past operational experiences in the analogue fields to optimize the field development planning regarding drilling and completion.',
      website: '#'
    },
    {
      name: 'Istech EP-5 Pte Ltd, Singapore',
      country: 'Singapore',
      description: 'Prospect Evaluation and EP-5 Block Myanmar: Telesto Energy has carried out complete prospect evaluation of EP-5 block in Myanmar.',
      website: '#'
    },
    {
      name: 'Post Drill Pore Pressure evaluation, EP-5, Myanmar',
      country: 'Myanmar',
      description: 'Post Drill Pore Pressure evaluation conducted for EP-5 Block in Myanmar.',
      website: '#'
    },
    {
      name: 'India DSF 2016',
      country: 'India',
      description: 'Telesto Energy was actively involved in the India Discovered Small Field Bid Round 2016 and carried out block screening for various clients in India and Overseas. The team conducted technical and economical evaluation for many blocks and supported in formulating a successful bidding strategy.',
      website: '#'
    },
    {
      name: 'Sun Drilling, Almaty, Kazakhstan',
      country: 'Kazakhstan',
      description: 'Telesto Energy has carried out Farm-In Evaluation of Onshore Kazakhstan Blocks, Yuzhnaya Block and Block 8.',
      website: '#'
    },
    {
      name: 'IMC Ltd, India',
      country: 'India',
      description: 'Economic due diligence of two fields in the Middle East. Exclusive contract with IMC for providing Consultancy & Advisory Services.',
      website: '#'
    },
    {
      name: 'Quippo, India',
      country: 'India',
      description: 'Carried out block screening of blocks on offer in India DSF 2016, including technical and economic evaluation of various fields in Cambay Basin and Mumbai Offshore.',
      website: '#'
    },
    {
      name: 'PNP Operating Company LLC, San Antonio, Texas, USA',
      country: 'USA',
      description: 'FDP Preparation for Turney Field: The work scope involves building a static geological model, dynamic model, conceptual field development plan, field depletion strategy using TEOR and project economics.',
      website: '#'
    },
    {
      name: 'Green Limited, PNG',
      country: 'Papua New Guinea',
      description: 'Farm-In Opportunity Evaluation of six graticular blocks (PPL-528) in the Gulf of Papua. The principle plays are Plio-Pleistocene submarine fan reservoirs and Miocene carbonates. The block is surrounded by gas discoveries and Pandora gas field.',
      website: '#'
    },
    {
      name: 'Lohit Oil & Gas',
      country: 'India',
      description: 'Carried out Technical and Economic evaluation of Barsila Field for Lohit Oil & Gas and advised on bidding strategy.',
      website: '#'
    },
    {
      name: 'Krishnan & Co',
      country: 'India',
      description: 'Entered into a Strategic partnership and carried out Technical and Economic evaluation of Neduvasal Field for the India DSF 2016 Bid Round.',
      website: '#'
    },
    {
      name: 'Gaveshana Geosciences, India',
      country: 'India',
      description: 'Telesto Energy has supported Gaveshana Geosciences to help raise funds for a seismic acquisition project in NE India.',
      website: '#'
    }
  ];

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle expanded state
  };

  return (
    <div className="min-h-screen relative">
      {/* Heading with Framer Motion animation */}
      <div className="flex items-start justify-center py-16">
        <motion.h1
          className="text-5xl font-['Roboto'] font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-black">Our</span>
          <span className="text-blue-500"> Projects</span>
        </motion.h1>
      </div>

      {/* Project List */}
      <div className="flex flex-wrap justify-center gap-6 px-6 py-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs bg-white rounded-lg shadow-lg overflow-hidden border transform transition-all duration-300 ease-in-out ${expandedIndex === index ? 'opacity-0' : ''}`} // Hide cards when expanded
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.country}</p>
              <p className={`mt-3 text-gray-700 whitespace-pre-line ${expandedIndex === index ? '' : 'line-clamp-2'}`}>
                {expandedIndex === index
                  ? project.description
                  : project.description.split('\n')[0] + '\n' + project.description.split('\n')[1] + '...'
                }
              </p>
              {expandedIndex !== index && (
                <button
                  onClick={() => handleExpand(index)}
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700 transition duration-200"
                >
                  Read More
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal View with Card Expansion Animation */}
      {expandedIndex !== null && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 flex justify-center items-center">
          <motion.div
            className="relative w-full lg:w-2/3 max-w-4xl bg-white rounded-lg overflow-hidden p-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <button onClick={() => setExpandedIndex(null)} className="text-gray-600 hover:text-gray-800">
                <FaTimes size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <h3 className="text-3xl font-semibold text-gray-800">{projects[expandedIndex].name}</h3>
            <p className="text-lg text-gray-500">{projects[expandedIndex].country}</p>
            <p className="mt-6 text-gray-700">{projects[expandedIndex].description}</p>
            {projects[expandedIndex].website && (
              <a
                href={projects[expandedIndex].website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-blue-500 hover:text-blue-700 transition duration-200"
              >
                Visit Website
              </a>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
