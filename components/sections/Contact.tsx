"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { contactLinks, profile } from "@/lib/data";
import { shortenAddress } from "@/lib/utils";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="04 — Get in touch"
      title="Have a protocol to ship?"
      description="Open to senior contracts, smart contract audits, and dApp engineering engagements."
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Channels — minimal list, no card chrome */}
        <ul className="space-y-px border-t border-white/[0.06]">
          {contactLinks.map((link) => {
            const display =
              link.label === "Wallet" ? shortenAddress(link.value) : link.value;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group/row flex items-center justify-between gap-3 border-b border-white/[0.06] py-4 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                      {link.label}
                    </div>
                    <div className="mt-1 truncate font-mono text-sm text-white">
                      {display}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-zinc-700 transition-all group-hover/row:translate-x-0.5 group-hover/row:text-white" />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Form — no card, just labelled inputs on the bg */}
        <motion.form
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
          }}
          className="space-y-5"
        >
          <Field label="Name" name="name" placeholder="Vitalik B." />
          <Field label="Email or wallet" name="contact" placeholder="you@protocol.xyz" />
          <Field label="Project" name="project" placeholder="What are we building?" />
          <div>
            <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Scope, timeline, chain..."
              className="w-full resize-none border-b border-white/[0.08] bg-transparent px-0 py-2 text-sm text-white placeholder-zinc-700 transition-colors focus:border-accent/60 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-[11px] text-zinc-600">
              {profile.email}
            </span>
            <Button type="submit">
              {submitted ? "Sent" : "Transmit"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-zinc-500">
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full border-b border-white/[0.08] bg-transparent px-0 py-2 text-sm text-white placeholder-zinc-700 transition-colors focus:border-accent/60 focus:outline-none"
      />
    </div>
  );
}
