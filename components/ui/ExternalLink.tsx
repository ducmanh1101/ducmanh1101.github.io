import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "inline" | "chip";
};

export function ExternalLink({
  href,
  className,
  children,
  variant = "inline",
  ...props
}: ExternalLinkProps) {
  const isExternal = href.startsWith("http");
  const target = isExternal ? "_blank" : undefined;
  const rel = isExternal ? "noopener noreferrer" : undefined;

  if (variant === "chip") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(
          "group/link inline-flex items-center gap-1 rounded border border-white/[0.08] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400 transition-colors hover:border-white/[0.18] hover:text-white",
          className,
        )}
        {...props}
      >
        {children}
        <ArrowUpRight className="h-3 w-3" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "group/link inline-flex items-center gap-1 text-zinc-300 transition-colors hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-px group-hover/link:-translate-y-px" />
    </a>
  );
}
