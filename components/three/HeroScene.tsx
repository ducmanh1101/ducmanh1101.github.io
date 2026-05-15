"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// Distributes points roughly evenly on a sphere using the Fibonacci lattice.
function fibonacciSphere(n: number, radius = 1) {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
  }
  return points;
}

const ACCENT = "#67e8f9";

function NetworkSphere() {
  const groupRef = useRef<THREE.Group>(null);

  const { lineGeometry, nodeGeometry, nodes } = useMemo(() => {
    const radius = 1.7;
    const nodeCount = 22;
    const nodes = fibonacciSphere(nodeCount, radius);

    // Connect each node to its 2 nearest neighbors only.
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const dists = nodes
        .map((n, j) => ({ j, d: nodes[i].distanceTo(n) }))
        .filter((p) => p.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      for (const { j } of dists) {
        if (j > i) {
          positions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z,
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );

    const nodeGeometry = new THREE.SphereGeometry(0.025, 10, 10);
    return { lineGeometry, nodeGeometry, nodes };
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    // Slow, calm rotation. Mouse parallax is barely perceptible.
    groupRef.current.rotation.y = t * 0.04 + mouse.x * 0.08;
    groupRef.current.rotation.x = mouse.y * 0.06;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.08} />
      </mesh>

      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.18} />
      </lineSegments>

      {nodes.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]} geometry={nodeGeometry}>
          <meshBasicMaterial color={ACCENT} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <NetworkSphere />
      </Suspense>
    </Canvas>
  );
}

export default HeroScene;
