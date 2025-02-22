import React from 'react';
import { motion } from 'framer-motion';
import ExperienceData from './data/ExperienceData';
import { LuBuilding2 } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FiAward } from "react-icons/fi";

const Experience = ({containerVariants, itemVariants}) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Professional Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            className="absolute left-8 top-0 w-0.5 h-full bg-blue-400/20"
            style={{ transition: "height 1s ease-out" }}
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {ExperienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-8 top-0 w-4 h-4 rounded-full bg-blue-400 transform -translate-x-1/2"
                  style={{
                    boxShadow: "0 0 0 8px rgba(59, 130, 246, 0.1)"
                  }}
                />
                
                <motion.div
                  className="bg-gray-800/30 rounded-2xl p-8 hover:bg-gray-800/40 transition-colors"
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <LuBuilding2 className="w-5 h-5 text-blue-400" />
                        <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <span className="font-semibold">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <LuMapPin className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400 mb-4">
                        <CiCalendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      
                      <div className="space-y-4">
                        <motion.div
                          variants={containerVariants}
                          className="space-y-2"
                        >
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              variants={itemVariants}
                              className="flex items-start gap-2"
                            >
                              <FiAward className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{achievement}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        <motion.div 
                          className="flex flex-wrap gap-2 mt-4"
                          variants={containerVariants}
                        >
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              variants={itemVariants}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience;