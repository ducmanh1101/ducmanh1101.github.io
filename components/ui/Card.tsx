import { cn } from "@/lib/utils";

type Variant = "surface" | "ghost";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  surface:
    "border border-white/[0.06] bg-white/[0.015] hover:border-white/[0.12]",
  ghost: "border border-transparent",
};

export function Card({
  className,
  variant = "surface",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
