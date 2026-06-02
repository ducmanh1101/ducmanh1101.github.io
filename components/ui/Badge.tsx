import { cn } from "@/lib/utils";

type Tone = "neutral" | "accent" | "live" | "warn" | "danger";

const tones: Record<Tone, string> = {
  neutral: "border-white/[0.08] text-zinc-400",
  accent: "border-accent/30 text-accent",
  live: "border-emerald-400/25 text-emerald-300",
  warn: "border-amber-400/30 text-amber-300",
  danger: "border-red-400/30 text-red-300",
};

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
  dot?: boolean;
};

export function Badge({
  tone = "neutral",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border bg-transparent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider",
        tones[tone],
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "h-1 w-1 rounded-full",
            tone === "live" ? "bg-emerald-400 animate-pulse-soft" : "bg-current",
          )}
        />
      )}
      {children}
    </span>
  );
}
