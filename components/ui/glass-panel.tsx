import * as React from "react";

import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "onDark" | "onLight";
}

function GlassPanel({ tone = "onLight", className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-b-[var(--radius-panel)] border shadow-xl backdrop-blur-xl",
        tone === "onDark"
          ? "border-bone/10 bg-charcoal/85 text-bone"
          : "border-charcoal/10 bg-bone/90 text-charcoal",
        className,
      )}
      {...props}
    />
  );
}

export { GlassPanel };
