import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children }) => {
  return (
    <motion.div
      className="motion-section"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
