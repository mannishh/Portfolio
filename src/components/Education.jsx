import React from "react";
import { motion } from "framer-motion";
import EducationData from "./data/EducationData";
import { FaGraduationCap } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

const Education = ({ containerVariants, itemVariants }) => {
  return (
    <section className="py-20 bg-gray-900/50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Educational Background
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {EducationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/30 rounded-2xl p-8 hover:bg-gray-800/40 transition-colors transform-gpu"
              style={{
                willChange: "transform",
                transformOrigin: "center",
                backfaceVisibility: "hidden",
              }}
              whileHover={{
                scale: 1.01,
                transition: { type: "spring", stiffness: 120, damping: 18 },
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <FaGraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-blue-400">
                      {edu.degree}
                    </h3>
                    <motion.div
                      className="flex items-center text-gray-400"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <CiCalendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.year}</span>
                    </motion.div>
                  </div>
                  <h4 className="text-lg font-semibold mt-2">{edu.college}</h4>
                  <p className="text-gray-400 mt-3">{edu.description}</p>
                  <motion.div
                    className="mt-4 flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* {edu.achievements.map((achievement, i) => (
                      <motion.span
                        key={i}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {achievement}
                      </motion.span>
                    ))} */}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
