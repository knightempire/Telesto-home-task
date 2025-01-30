"use client" ; 
import Image from "next/image";
import { motion } from "framer-motion";  // Import framer-motion
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="section pb-[50px]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            {/* Animated Title */}
            <motion.h1
              className="font-primary font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Let Us Bring AI-Driven Insights to Power Your Next Big Energy Breakthrough
            </motion.h1>

            {/* Animated Description */}
            <motion.p
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Artificial Intelligence & Big Data Analytics for Oil & Gas.
            </motion.p>

            {/* Animated Image */}
            <motion.div
              className="mx-auto mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Image
                src="/images/banner-art.svg"
                width={750}
                height={350}
                alt="banner image"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
