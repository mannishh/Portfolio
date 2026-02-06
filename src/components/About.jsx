import React from "react";
import { motion } from "framer-motion";
import portfolioImage from "../assets/portfolio.avif"

const About = ({ containerVariants, itemVariants }) => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hey there! I'm Manish Hengaju, a full-stack web developer based in
              Bhaktapur, Nepal. I'm a passionate web developer with expertise in
              modern web technologies. I love creating responsive and
              user-friendly applications that solve real-world problems.
            </motion.p>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {/* <span>5+ Years Experience</span> */}
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              > 
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <img
              src={portfolioImage}
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
            <motion.div
              className="absolute inset-0 border-2 border-blue-400 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
