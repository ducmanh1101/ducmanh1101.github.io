"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn, shortenAddress } from "@/lib/utils";

type WalletPillProps = {
  address: string;
  className?: string;
  withCopy?: boolean;
};

export function WalletPill({ address, className, withCopy = true }: WalletPillProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-white/[0.08] px-2.5 py-1 font-mono text-[11px] text-zinc-400",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
      <span className="tabular-nums text-zinc-200">{shortenAddress(address)}</span>
      {withCopy && (
        <button
          onClick={handleCopy}
          aria-label="Copy address"
          className="flex h-4 w-4 items-center justify-center rounded text-zinc-500 transition-colors hover:text-white"
        >
          {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
        </button>
      )}
    </div>
  );
}
