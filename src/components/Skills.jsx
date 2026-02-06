import React from "react";
import { motion } from "framer-motion";
import SkillsData from "./data/SkillsData";

const Skills = ({ containerVariants, itemVariants }) => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(SkillsData).map(
            ([category, items], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-gray-800/30 rounded-2xl p-8 hover:bg-gray-800/40 transition-colors"
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {items.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all group"
                    >
                      <div className="text-gray-400 group-hover:text-blue-400 transition-colors mb-3">
                        {skill.icon}
                      </div>
                      <span className="text-sm text-center font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
