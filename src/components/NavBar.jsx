import React, { useState } from "react";
import { motion } from "framer-motion";

const NavBar = ({
  containerVariants,
  itemVariants,
  activeSection,
  setActiveSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection(section); // Update active section state
  };

  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-xl font-bold"
          >
            MH
          </motion.span>

          {/* Desktop Menu */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="hidden md:flex space-x-8"
          >
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <motion.button
                key={item}
                variants={itemVariants}
                onClick={() => handleScroll(item)}
                className={`capitalize ${
                  activeSection === item
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-sm md:hidden"
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <motion.button
                key={item}
                variants={itemVariants}
                onClick={() => {
                  handleScroll(item);
                  setIsMobileMenuOpen(false); // Close menu on item click
                }}
                className={`capitalize ${
                  activeSection === item
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
