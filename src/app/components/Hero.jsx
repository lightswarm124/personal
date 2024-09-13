// src/app/components/Hero.jsx
"use client";

import { Canvas } from "@react-three/fiber";
import HorizontalCubeCarousel from "./HorizontalCubeCarousel";
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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-background overflow-hidden"
    >
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 2, 10], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <HorizontalCubeCarousel />
      </Canvas>

      {/* Animated Hero Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <motion.div initial="hidden" animate="visible" variants={textVariant}>
          <h1 className="text-6xl font-bold text-textPrimary">My Portfolio</h1>
        </motion.div>
      </div> */}
    </section>
  );
}
