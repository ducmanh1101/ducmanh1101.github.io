"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Send,
  Twitter,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { contactLinks, profile } from "@/lib/data";

const channelIcons: Record<string, LucideIcon> = {
  GitHub: Github,
  Twitter: Twitter,
  Telegram: Send,
  LinkedIn: Linkedin,
};

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 — Get in touch"
      title="Have a protocol to ship?"
      description={
        <>
          Open to senior contracts, smart contract audits, and dApp engineering
          engagements.
          <span className="mt-5 block">
            <ButtonLink href={`mailto:${profile.email}`}>
              <Mail className="h-3.5 w-3.5" />
              Contact me
            </ButtonLink>
          </span>
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Channels — minimal list with icons, no card chrome */}
        <ul className="space-y-px border-t border-white/[0.06]">
          {contactLinks.map((link) => {
            const Icon = channelIcons[link.label] ?? Mail;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group/row flex items-center gap-4 border-b border-white/[0.06] py-4 transition-colors hover:bg-white/[0.02]"
                >
                  <Icon className="h-5 w-5 shrink-0 text-zinc-600 transition-colors group-hover/row:text-accent" />
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                      {link.label}
                    </div>
                    <div className="mt-1 truncate font-mono text-sm text-white">
                      {link.value}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-zinc-700 transition-all group-hover/row:translate-x-0.5 group-hover/row:text-white" />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            Education
          </div>
          <div className="flex items-start gap-4 border-t border-white/[0.06] pt-6">
            <GraduationCap className="h-6 w-6 shrink-0 text-accent" />
            <div className="min-w-0">
              <div className="text-base font-medium text-white">
                Sai Gon University
              </div>
              <div className="mt-1 text-sm text-zinc-400">
                Faculty of Information Technology
              </div>
              <div className="mt-1 text-sm text-zinc-500">
                Major in Software Engineering
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
