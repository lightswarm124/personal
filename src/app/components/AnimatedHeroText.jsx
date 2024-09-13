// src/app/components/AnimatedHeroText.js
"use client";

import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function AnimatedHeroText() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariant}
      className="text-5xl font-bold text-textPrimary"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
    </motion.div>
  );
}
