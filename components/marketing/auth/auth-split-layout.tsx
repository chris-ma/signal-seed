import type { ReactNode } from "react";

import { LogoMark } from "@/components/layout/logo-mark";

interface AuthSplitLayoutProps {
  children: ReactNode;
}

export function AuthSplitLayout({ children }: AuthSplitLayoutProps) {
  return (
    <div className="grid md:min-h-[calc(100vh-106px)] md:grid-cols-2">
      <div className="hidden flex-col justify-between bg-forest px-12 py-16 text-bone md:flex">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-6 w-6" />
          <span className="font-mono text-xs tracking-[0.25em] uppercase">Signal Seed</span>
        </div>
        <p className="max-w-sm font-serif text-3xl leading-snug text-bone/90 italic">
          Grow ideas like forests, not factories.
        </p>
        <p className="max-w-sm text-sm text-bone/50">
          An AI-guided innovation operating system for turning uncertainty into
          opportunity.
        </p>
      </div>
      <div className="flex items-center justify-center px-6 py-16 md:px-12">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
