import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-bg hover:bg-zinc-200",
  secondary:
    "border border-white/[0.08] text-zinc-200 hover:border-white/[0.18] hover:text-white",
  ghost:
    "text-zinc-400 hover:text-white",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export const ButtonLink = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <a
      ref={ref}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  ),
);
ButtonLink.displayName = "ButtonLink";
