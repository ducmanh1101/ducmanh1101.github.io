"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled
          ? "border-b border-white/[0.06] bg-bg/80 backdrop-blur"
          : "border-b border-transparent",
      )}
    >
      <Container>
        <nav className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-sm border border-white/[0.12] font-mono text-xs font-semibold text-white">
              J
            </div>
            <span className="font-mono text-sm text-zinc-300">
              {profile.handle}
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item, i) => (
              <li key={item.href} className="font-mono text-xs text-zinc-500">
                <a
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  <span className="text-zinc-700">0{i + 1}.</span> {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button variant="secondary" className="px-3 py-1 text-xs">
            Connect Wallet
          </Button>
        </nav>
      </Container>
    </motion.header>
  );
}
