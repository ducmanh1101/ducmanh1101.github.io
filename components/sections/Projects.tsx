"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { projects, type Project } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="02 — Selected work"
      title="Protocols & products"
      description="A snapshot of recent on-chain systems and interfaces shipped to production."
    >
      <div className="grid auto-rows-fr gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
            className={i === 0 ? "lg:col-span-2" : ""}
          >
            <ProjectCard project={project} featured={i === 0} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <Card className="flex h-full flex-col p-6 md:p-7">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-1.5">
            <Badge tone={project.network === "Mainnet" ? "live" : "neutral"} dot={project.network === "Mainnet"}>
              {project.network}
            </Badge>
            {project.tags.map((tag) => (
              <Badge key={tag} tone="neutral">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className={featured ? "text-2xl font-semibold text-white md:text-3xl" : "text-xl font-semibold text-white"}>
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-500">{project.tagline}</p>
        </div>
        {project.metric && (
          <div className="shrink-0 text-right">
            <div className="font-mono text-lg font-medium tabular-nums text-white">
              {project.metric.value}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
              {project.metric.label}
            </div>
          </div>
        )}
      </div>

      <p className={`mb-6 leading-relaxed text-zinc-400 ${featured ? "max-w-xl text-base" : "text-sm"}`}>
        {project.description}
      </p>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/[0.05] pt-5">
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-zinc-500">
          {project.stack.map((s, j) => (
            <span key={s} className="flex items-center gap-3">
              {j > 0 && (
                <span className="text-zinc-700" aria-hidden>
                  /
                </span>
              )}
              <span>{s}</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
          {project.links.map((link) => (
            <ExternalLink key={link.label} href={link.href} variant="chip">
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </Card>
  );
}
