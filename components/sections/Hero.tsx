"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { WalletPill } from "@/components/ui/WalletPill";
import { profile, stats } from "@/lib/data";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null },
);

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 md:pt-44">
      {/* Signature: subtle trading-UI grid */}
      <div
        className="absolute inset-0 -z-20 grid-bg grid-mask"
        aria-hidden
      />

      {/* Single 3D element, calmly placed off to the side */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-15%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 opacity-70 md:right-[-8%]">
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
            Building DeFi primitives
            <br />
            <span className="text-zinc-500">& on-chain systems.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-zinc-400"
          >
            Web3 engineer focused on smart contract architecture, DeFi
            mechanism design, and production-grade dApp interfaces.
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
            <WalletPill address={profile.walletAddress} className="ml-1" />
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
