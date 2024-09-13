// src/app/components/Cube.jsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

export default function Cube() {
  const meshRef = useRef();

  // Animate cube rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]} scale={1.5}>
      {/* Box Geometry and Mesh Wobble Material */}
      <boxGeometry args={[1, 1, 1]} />
      <MeshWobbleMaterial color="#f39c12" speed={2} factor={0.6} />
    </mesh>
  );
}
