import Link from "next/link";

import { Section } from "@/components/ui/section";
import { PRIMARY_NAV } from "@/lib/nav-data";
import { LogoMark } from "@/components/layout/logo-mark";

export function SiteFooter() {
  return (
    <Section tone="charcoal" className="py-16">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-6 w-6" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase">Signal Seed</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-bone/60">
            Grow ideas like forests, not factories.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4 text-bone/50">Explore the site</p>
          <ul className="space-y-2 text-sm text-bone/75">
            {PRIMARY_NAV.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-bone">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4 text-bone/50">Get started</p>
          <ul className="space-y-2 text-sm text-bone/75">
            <li>
              <Link href="/login" className="hover:text-bone">
                Log in
              </Link>
            </li>
            <li>
              <Link href="/join" className="hover:text-bone">
                Join
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-bone/10 pt-6 text-xs text-bone/40">
        © 2026 Signal Seed. Grow ideas like forests, not factories.
      </div>
    </Section>
  );
}
