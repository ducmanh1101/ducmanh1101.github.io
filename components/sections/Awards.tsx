"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { award } from "@/lib/data";

export function Awards() {
  return (
    <Section
      id="awards"
      eyebrow="03 — Recognition"
      title="Awards & recognition"
      description="Hackathon wins and a few moments worth keeping."
    >
      <Card className="p-6 md:p-8">
        <div className="flex flex-col gap-5 border-b border-white/[0.06] pb-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-1.5">
              <Badge tone="accent" dot>
                {award.placement}
              </Badge>
              <Badge tone="neutral">{award.category}</Badge>
            </div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
              <Trophy className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              {award.event}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
              {award.summary}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px]">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-zinc-600" aria-hidden />
                <span className="text-zinc-300">{award.date}</span>
              </span>
              <span className="text-zinc-500">{award.organizer}</span>
            </div>
          </div>
          <div className="flex shrink-0 items-end gap-6">
            <Metric label="Prize" value={award.prize} />
            <Metric label="Prize pool" value={award.prizePool} />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {award.photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-lg border border-white/[0.06]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-10 font-mono text-[11px] text-zinc-200">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.05] pt-5">
          <span className="font-mono text-[11px] text-zinc-500">
            Project · <span className="text-zinc-300">{award.project}</span>
          </span>
          <ExternalLink href={award.link} variant="chip">
            Read the feature
          </ExternalLink>
        </div>
      </Card>
    </Section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-right">
      <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
        {label}
      </div>
      <div className="mt-0.5 font-mono text-lg tabular-nums text-white">
        {value}
      </div>
    </div>
  );
}
