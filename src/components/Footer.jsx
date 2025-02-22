import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center text-gray-400">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {currentYear} Manish. All rights reserved.
        </motion.p>
      </footer>
    
  )
}

export default Footer;
