"use client";

import { motion } from "motion/react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function CardAnimationWrapper({ children, className }: CardProps) {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}

export default CardAnimationWrapper;
