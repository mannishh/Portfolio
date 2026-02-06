import React from "react";
import { motion } from "framer-motion";
import ProjectsData from "./data/ProjectsData";

const Project = ({ containerVariants, itemVariants }) => {
  return (
    <section id="projects" className="py-20 bg-gray-900/50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ProjectsData.map((project, index) => (
            <a
              href="https://online-job-portal-xn31.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg overflow-hidden transform-gpu"
                style={{
                  willChange: "transform",
                  transformOrigin: "center",
                  backfaceVisibility: "hidden",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 120, damping: 18 },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="overflow-hidden transform-gpu"
                  style={{ willChange: "transform" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          transition: {
                            type: "spring",
                            stiffness: 120,
                            damping: 16,
                          },
                        }}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm transform-gpu"
                        style={{ willChange: "transform" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
