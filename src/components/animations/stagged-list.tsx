"use client";
import { motion } from "framer-motion";

interface StaggedAnimationListProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export default function StaggedAnimationList({
  children,
  staggerDelay = 0.2,
  delayChildren = 0.1,
  className,
}: StaggedAnimationListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay, // Retraso entre cards
        delayChildren: delayChildren, // Retraso inicial
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

//

interface StaggedAnimationItemProps {
  children: React.ReactNode;
}

export function StaggedAnimationItem({ children }: StaggedAnimationItemProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return <motion.div variants={cardVariants}>{children}</motion.div>;
}
