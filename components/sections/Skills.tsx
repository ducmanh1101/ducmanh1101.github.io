"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { skills } from "@/lib/data";

const SkillGraph = dynamic(
  () => import("@/components/three/SkillGraph").then((m) => m.SkillGraph),
  { ssr: false, loading: () => null },
);

// One accent per capability — Blockchain keeps the site accent, others shift.
const SKILL_COLORS: Record<string, string> = {
  Blockchain: "#67E8F9",
  Frontend: "#A78BFA",
  Backend: "#34D399",
};

export function Skills() {
  const [active, setActive] = useState(0);
  const activeSkill = skills[active];
  const color = SKILL_COLORS[activeSkill.title] ?? "#67E8F9";

  return (
    <Section
      id="skills"
      eyebrow="01 — Capabilities"
      title="Full-stack across the Web3 stack"
      description="Three layers I work in — blockchain, frontend, and backend. Pick one to explore the tools behind it."
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.3 }}
        className="grid gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.04] md:grid-cols-3"
      >
        {/* Left: vertical tabs */}
        <div className="flex flex-col bg-bg md:col-span-1">
          {skills.map((skill, i) => {
            const selected = i === active;
            return (
              <button
                key={skill.title}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(i)}
                style={selected ? { borderLeftColor: color } : undefined}
                className={`flex flex-col gap-2 border-l-2 border-t border-t-white/[0.06] px-5 py-5 text-left transition-colors first:border-t-0 md:px-7 ${
                  selected
                    ? "bg-white/[0.03]"
                    : "border-l-transparent hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <h3
                    style={selected ? { color } : undefined}
                    className={`text-lg font-medium transition-colors ${
                      selected ? "" : "text-zinc-400"
                    }`}
                  >
                    {skill.title}
                  </h3>
                </div>
                <p
                  className={`max-w-md text-xs leading-relaxed transition-colors ${
                    selected ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {skill.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right: 3D node graph driven by the active tab's stack */}
        <div className="relative min-h-[340px] bg-bg md:col-span-2 md:min-h-0">
          <div className="absolute inset-0">
            <SkillGraph tags={activeSkill.tags} color={color} />
          </div>
          {/* Accessible fallback for the stack shown as 3D nodes */}
          <ul className="sr-only">
            {activeSkill.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
