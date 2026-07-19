"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { useHeaderTheme } from "@/lib/header-theme-context";
import { PRIMARY_NAV } from "@/lib/nav-data";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/layout/logo-mark";

export function SiteHeader() {
  const { isOverDark } = useHeaderTheme();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out",
        isOverDark
          ? "bg-transparent text-bone"
          : "border-b border-stone/50 bg-bone/90 text-charcoal backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="h-6 w-6" />
          <span className="font-mono text-xs tracking-[0.25em] uppercase">SeedStudio</span>
        </Link>

        <MegaMenu items={PRIMARY_NAV} isOverDark={isOverDark} />

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" surface={isOverDark ? "dark" : "light"} size="sm">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild variant="primary" surface={isOverDark ? "dark" : "light"} size="sm">
            <Link href="/join">Join</Link>
          </Button>
        </div>

        <MobileNav items={PRIMARY_NAV} isOverDark={isOverDark} />
      </div>
    </header>
  );
}
