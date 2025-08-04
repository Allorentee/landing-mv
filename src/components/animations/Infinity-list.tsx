"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

interface InfiniteSliderProps {
  items: React.ReactNode[];
}

export default function InfiniteSlider({ items }: InfiniteSliderProps) {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        whiteSpace: "nowrap",
        width: "100%",
      }}
    >
      <motion.div
        style={{ display: "inline-flex", marginRight: "10rem" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 150,
          ease: "linear",
        }}
      >
        {/* Duplicamos los ítems para efecto infinito */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </motion.div>
    </div>
  );
}
