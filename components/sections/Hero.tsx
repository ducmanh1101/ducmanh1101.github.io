"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { profile, stats, experience } from "@/lib/data";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null },
);

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

// Unique roles pulled from work history, longest-to-shortest for a calmer loop.
const roles = Array.from(new Set(experience.map((e) => e.role)));

function useTypewriter(
  words: string[],
  { typeSpeed = 75, deleteSpeed = 35, pause = 1600 } = {},
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? word.slice(0, prev.length - 1)
            : word.slice(0, prev.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <section className="relative isolate overflow-hidden pt-20 md:pt-24">
      {/* Signature: subtle trading-UI grid */}
      <div className="absolute inset-0 -z-20 grid-bg grid-mask" aria-hidden />

      {/* Single 3D element, calmly placed off to the side */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-15%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 opacity-70 md:right-[-3%]">
          <HeroScene />
        </div>
      </div>

      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="relative max-w-2xl py-16 md:py-24"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
          >
            <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse-soft" />
            {profile.status}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          >
            Hi, I&apos;m {profile.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-4 flex h-8 items-center font-mono text-lg text-emerald-300/90 md:text-xl"
            aria-label={roles.join(", ")}
          >
            <span aria-hidden>{typedRole}</span>
            <span
              aria-hidden
              className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.1em] bg-emerald-400 animate-pulse-soft"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-zinc-400"
          >
            I&apos;m a software engineer who fell into Web3 and never looked
            back. Over the past few years I&apos;ve moved from building backend
            services and full-stack products to shipping audited smart
            contracts, DeFi vaults, and production dApps — pairing clean
            engineering with on-chain mechanism design.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="#projects" variant="primary">
              View projects
              <ArrowRight className="h-3.5 w-3.5" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact
            </ButtonLink>
          </motion.div>

          {/* Inline credibility line — stats without a card grid */}
          <motion.dl
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-14 flex flex-wrap items-baseline gap-x-8 gap-y-3 font-mono text-xs text-zinc-500"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-baseline gap-2">
                {i > 0 && (
                  <span className="hidden text-zinc-700 md:inline" aria-hidden>
                    /
                  </span>
                )}
                <dt className="uppercase tracking-widest">{s.label}</dt>
                <dd className="text-white tabular-nums">{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </Container>
    </section>
  );
}
