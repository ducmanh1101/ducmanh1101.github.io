import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  containerClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32", className)}
      {...props}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <header className="mb-14 max-w-2xl md:mb-16">
            {eyebrow && (
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 max-w-xl text-pretty text-sm text-zinc-400 md:text-base">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
