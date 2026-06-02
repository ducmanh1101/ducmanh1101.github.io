import { Container } from "@/components/ui/Container";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 font-mono text-[11px] text-zinc-600 md:flex-row md:items-center">
          <div>
            <span className="text-zinc-400">
              © {new Date().getFullYear()} {profile.name}
            </span>
            <span className="mx-3 text-zinc-700">/</span>
            <span>Built with Next.js & R3F</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse-soft" />
              <span className="text-zinc-400">All systems operational</span>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
