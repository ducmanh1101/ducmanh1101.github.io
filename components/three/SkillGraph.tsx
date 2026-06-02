"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const ACCENT = "#67e8f9";
const BASE_TILT = -0.5; // ring tilted toward the viewer, Saturn-style

function NodeField({ tags, color }: { tags: string[]; color: string }) {
  const tiltRef = useRef<THREE.Group>(null);
  const spinRef = useRef<THREE.Group>(null);
  const startRef = useRef<number | null>(null);

  const { nodes, labels, lineGeometry, nodeGeometry } = useMemo(() => {
    const radius = 2.0;
    // Evenly spaced around a ring in the XZ plane, starting at the top.
    const nodes = tags.map((_, i) => {
      const a = (i / tags.length) * Math.PI * 2 - Math.PI / 2;
      return new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius);
    });
    // Labels sit just outside their node, radially away from the hub.
    const labels = nodes.map((p) => p.clone().setLength(radius + 0.5));

    const positions: number[] = [];
    for (const n of nodes) positions.push(0, 0, 0, n.x, n.y, n.z);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );

    const nodeGeometry = new THREE.SphereGeometry(0.07, 16, 16);
    return { nodes, labels, lineGeometry, nodeGeometry };
  }, [tags]);

  useFrame(({ clock, mouse }) => {
    const tilt = tiltRef.current;
    const spin = spinRef.current;
    if (!tilt || !spin) return;
    const t = clock.getElapsedTime();
    if (startRef.current === null) startRef.current = t;

    // Quick ease-out grow when the field first appears (replays on tab switch).
    const age = t - startRef.current;
    const grow = Math.min(1, age / 0.5);
    const eased = 1 - Math.pow(1 - grow, 3);
    tilt.scale.setScalar(0.85 + 0.15 * eased);

    tilt.rotation.x = BASE_TILT + mouse.y * 0.1;
    tilt.rotation.y = mouse.x * 0.15;
    spin.rotation.y = t * 0.16;
  });

  return (
    <group ref={tiltRef}>
      <group ref={spinRef}>
        {/* Hub: wireframe shell + solid core, echoing the Hero scene */}
        <mesh>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshBasicMaterial
            color={color}
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.16, 24, 24]} />
          <meshBasicMaterial color={color} transparent opacity={0.9} />
        </mesh>

        <lineSegments geometry={lineGeometry}>
          <lineBasicMaterial color={color} transparent opacity={0.2} />
        </lineSegments>

        {nodes.map((p, i) => (
          <group key={tags[i]}>
            <mesh position={[p.x, p.y, p.z]} geometry={nodeGeometry}>
              <meshBasicMaterial color={color} transparent opacity={0.9} />
            </mesh>
            <group position={[labels[i].x, labels[i].y, labels[i].z]}>
              <Html center style={{ pointerEvents: "none" }}>
                <span
                  style={{ borderColor: `${color}40` }}
                  className="select-none whitespace-nowrap rounded-md border bg-bg/80 px-2.5 py-1 font-mono text-[11px] text-zinc-200 backdrop-blur-sm"
                >
                  {tags[i]}
                </span>
              </Html>
            </group>
          </group>
        ))}
      </group>
    </group>
  );
}

export function SkillGraph({
  tags,
  color = ACCENT,
}: {
  tags: string[];
  color?: string;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        {/* key replays the grow-in animation whenever the tab changes */}
        <NodeField key={tags.join()} tags={tags} color={color} />
      </Suspense>
    </Canvas>
  );
}

export default SkillGraph;
