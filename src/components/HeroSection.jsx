import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import profileImage from "../image/pp.jpg";

const HeroSection = ({ containerVariants, itemVariants }) => {
  const codeString = "<Manish Hengaju/>";

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-around flex-col-reverse md:flex-row">
        {/* Left Side: Text & Code Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            className="mb-8 inline-block"
          >
            <div className="text-6xl font-mono text-blue-400 mb-4">
              {codeString.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.h1
            className="text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Full Stack Developer
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Crafting beautiful and functional web experiences
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                href: "https://github.com/mannishh",
                icon: <FaGithub size={24} />,
              },
              {
                href: "https://www.linkedin.com/in/manish-hengaju-001821316/",
                icon: <FaLinkedin size={24} />,
              },
              {
                href: "mailto:manish.hju@gmail.com",
                icon: <IoMdMail size={24} />,
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transform"
                variants={itemVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Picture */}
        <motion.div
          className="flex-shrink-0 mb-10 md:mb-0 flex items-center justify-center w-full md:w-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover transition-all duration-1000 ease-in-out md:w-64 md:h-64"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              scale: 1.1,
            }}
            transition={{ duration: 1.2 }}
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 60%)",
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        whileHover={{ y: [0, -8, 0] }}
      >
        <FaChevronDown className="animate-bounce" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
