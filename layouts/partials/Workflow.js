"use client";

import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { motion } from "framer-motion";  // Import framer-motion for animations

const Workflow = () => {
  const workflow = {
    title: "Experience the best workflow with us",
    image: "/images/banner.svg",
    description:
      "we specialize in Artificial Intelligence and Big Data Analytics tailored for the oil and gas industry. Our services are designed to optimize your operations, providing data-driven insights that lead to significant breakthroughs in efficiency and productivity. Our portfolio advisory services offer global farm-in opportunities, ensuring value assurance and strategic growth for your assets. With a team of experienced professionals, we provide subsurface consulting and technical advisory services, including exploration, appraisal, field development, and reservoir management.Experience a seamless workflow with Telesto Energy, where innovation meets expertise to drive your next big energy breakthrough.",
  };

  return (
    <section className="section pb-10">
      <div className="container">
        <div className="row flex items-center justify-between">
          {/* Content on the right */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and move from the left
            whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to its original position
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Duration and easing
          >
            {markdownify(
              workflow.title,
              "h2",
              "mx-auto max-w-[400px] font-bold leading-[44px]"
            )}
            {markdownify(workflow.description, "p", "mt-3")}
          </motion.div>

          {/* Image on the left */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 100 }} // Start with opacity 0 and move from the right
            whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to its original position
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Duration and easing
          >
            <Image
              src={workflow.image}
              alt="workflow image"
              width={750}
              height={350}
              className="mx-auto lg:mx-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
