// src/app/components/HorizontalCubeCarousel.jsx
"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";

export default function HorizontalCubeCarousel() {
  const groupRef = useRef();
  const [dragging, setDragging] = useState(false);
  const [speed, setSpeed] = useState(0.01);

  // Drag interaction using use-gesture
  const bind = useDrag(({ offset: [x] }) => {
    setSpeed(-x / 2000); // Speed adjustment based on drag
    setDragging(true);
  });

  // Continuous scrolling motion (auto-scroll or dragging)
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.x += speed;
      if (!dragging) {
        setSpeed(0.01); // Reset speed if not dragging
      }

      // Wrap-around effect for continuous scrolling
      if (groupRef.current.position.x > 10) {
        groupRef.current.position.x = -10;
      } else if (groupRef.current.position.x < -10) {
        groupRef.current.position.x = 10;
      }
    }
  });

  // Generate two arrays of cubes for continuous scrolling
  const cubes = [];
  const numCubes = 10;

  for (let i = 0; i < numCubes; i++) {
    const position = [i * 2, 0, 0]; // Spacing out cubes horizontally
    cubes.push(
      <mesh key={i} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={i % 2 === 0 ? "#4a90e2" : "#f39c12"} />
      </mesh>
    );
  }

  // Duplicate the cube chain for a seamless transition
  const cubesWithDuplicate = [
    ...cubes,
    ...cubes.map((cube, i) => (
      <mesh key={`duplicate-${i}`} position={[i * 2 + numCubes * 2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={i % 2 === 0 ? "#4a90e2" : "#f39c12"} />
      </mesh>
    )),
  ];

  return (
    <group ref={groupRef} {...bind()} onPointerUp={() => setDragging(false)}>
      {cubesWithDuplicate}
    </group>
  );
}
