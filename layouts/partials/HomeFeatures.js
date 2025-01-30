"use client";

import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { motion } from "framer-motion";  // Import framer-motion

const HomeFeatures = ({ feature }) => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <h2>{markdownify(feature.title)}</h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {feature.features.map((item, i) => (
            <motion.div
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
              key={`feature-${i}`}
              initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and slide from below
              whileInView={{ opacity: 1, y: 0 }}  // Fade in and slide to the normal position
              viewport={{ once: true, amount: 0.2 }}  // Trigger the animation when the element comes into view
              transition={{ duration: 0.8, delay: i * 0.1 }}  // Delay each card animation slightly
            >
              {item.icon && (
                <Image
                  className="mx-auto"
                  src={item.icon}
                  width={30}
                  height={30}
                  alt=""
                />
              )}
              <div className="mt-4">
                {markdownify(item.name, "h3", "h5")}
                <p className="mt-3">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
