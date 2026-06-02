"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Track record"
      title="Experience"
      description="Four years across DeFi, smart contract development, and frontend infrastructure."
    >
      <ol className="relative">
        {experience.map((item, i) => (
          <motion.li
            key={item.role}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="grid grid-cols-12 gap-4 border-t border-white/[0.06] py-8 first:border-t-0 md:gap-8 md:py-10"
          >
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-xs text-zinc-500">
                {item.period}
              </div>
              <div className="mt-1 font-mono text-[11px] text-zinc-600">
                {item.location}
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="text-lg font-medium text-white">{item.role}</h3>
              <p className="text-sm text-zinc-500">{item.company}</p>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((h) => (
                  <li key={h} className="text-sm leading-relaxed text-zinc-400">
                    — {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
