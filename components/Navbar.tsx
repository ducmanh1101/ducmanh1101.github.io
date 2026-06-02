"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(navItems[0].href);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
            {navItems.map((item, i) => {
              const isActive = active === item.href;
              return (
                <li key={item.href} className="font-mono text-xs">
                  <a
                    href={item.href}
                    className={cn(
                      "relative transition-colors",
                      isActive
                        ? "text-white"
                        : "text-zinc-500 hover:text-white",
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </motion.header>
  );
}
