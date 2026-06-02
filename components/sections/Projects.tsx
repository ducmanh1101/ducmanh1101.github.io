"use client";

import { useState } from "react";
import { Pin, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

function statusTone(status: Project["status"]) {
  switch (status) {
    case "Mainnet":
      return "live" as const;
    case "Maintenance":
      return "warn" as const;
    case "Closed":
      return "danger" as const;
    default:
      return "neutral" as const;
  }
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="02 — Selected work"
      title="Protocols & products"
      description="A snapshot of recent on-chain systems and interfaces shipped to production."
    >
      <div className="grid auto-rows-fr gap-3 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: (i % 2) * 0.05 }}
            // className={i === 0 ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} featured={i === 0} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const TABS = ["Overview", "What I did", "Stack"] as const;
type Tab = (typeof TABS)[number];

function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  const [tab, setTab] = useState<Tab>("Overview");

  return (
    <Card
      className={cn(
        "flex h-full flex-col p-6 md:p-7",
        featured && "border-accent/40 hover:border-accent/60",
      )}
    >
      {featured && (
        <span
          className="absolute right-5 top-5 text-accent"
          aria-label="Featured project"
        >
          <Pin className="h-4 w-4 -rotate-45 fill-current" />
        </span>
      )}
      <div className="mb-5">
        <div className="mb-3 flex flex-wrap items-center gap-1.5">
          <Badge
            tone={statusTone(project.status)}
            dot={project.status === "Mainnet"}
          >
            {project.status}
          </Badge>
          {project.tags.map((tag) => (
            <Badge key={tag} tone="neutral">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-1 text-sm text-zinc-500">{project.tagline}</p>
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-xs">
            {project.metrics.map((m) => (
              <span key={m.label} className="flex items-baseline gap-1.5">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">
                  {m.label}
                </span>
                <span className="tabular-nums text-zinc-200">{m.value}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-white/[0.06] font-mono text-[11px] uppercase tracking-widest">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "-mb-px border-b py-2 transition-colors",
              tab === t
                ? "border-accent text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-300",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mb-6 mt-4 h-[120px] overflow-y-auto pr-1">
        {tab === "Overview" && (
          <p className="text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>
        )}
        {tab === "Stack" && (
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded border border-white/[0.08] px-2 py-1 text-zinc-300"
              >
                {s}
              </span>
            ))}
          </div>
        )}
        {tab === "What I did" && (
          <ul className="space-y-2 text-sm text-zinc-400">
            {project.contributions.map((c) => (
              <li key={c} className="flex gap-2.5">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/[0.05] pt-5">
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px]">
          <span className="flex items-center gap-1.5">
            <Calendar
              className="h-3.5 w-3.5 text-zinc-600"
              aria-label="Timeline"
            />
            <span className="text-zinc-300">{project.period}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-zinc-600" aria-label="Team" />
            <span className="text-zinc-300">{project.team}</span>
          </span>
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
