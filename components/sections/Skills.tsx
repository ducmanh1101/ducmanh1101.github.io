"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="01 — Capabilities"
      title="What I build"
      description="Battle-tested across mainnet protocols. Smart contracts to dApp UX, with the infrastructure in between."
    >
      <ul className="grid gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.04] md:grid-cols-2">
        {skills.map((skill, i) => (
          <motion.li
            key={skill.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="bg-bg p-7 md:p-9"
          >
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-zinc-600">
                0{i + 1}
              </span>
              <h3 className="text-lg font-medium text-white">{skill.title}</h3>
            </div>
            <p className="mb-5 max-w-md text-sm leading-relaxed text-zinc-400">
              {skill.description}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-zinc-500">
              {skill.tags.map((tag, j) => (
                <span key={tag} className="flex items-center gap-3">
                  {j > 0 && (
                    <span className="text-zinc-700" aria-hidden>
                      /
                    </span>
                  )}
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
