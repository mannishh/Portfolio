import React from "react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact" className="py-20 overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new projects and opportunities.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:manish.hju@gmail.com"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors transform-gpu"
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 120, damping: 16 },
              }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: "transform" }}
            >
              <IoMdMail size={20} />
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
