import Link from "next/link";

import { HEADER_NAV } from "@/lib/nav-data";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/layout/logo-mark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone/20 bg-charcoal text-bone">
      <div className="mx-auto flex h-[106px] w-full max-w-7xl items-center justify-between px-6 md:px-16">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="h-6 w-6" />
          <span className="font-serif text-xl font-medium tracking-[1.5px]">SIGNAL SEED</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {HEADER_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-bone/90 transition-colors hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild variant="primary" surface="dark" size="sm">
            <Link href="/join">Register</Link>
          </Button>
        </div>

        <MobileNav items={HEADER_NAV} />
      </div>
    </header>
  );
}
