"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import type { NavLinkItem } from "@/lib/nav-data";

interface MobileNavProps {
  items: NavLinkItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-bone transition-colors md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent title="Site navigation">
        <div className="mt-8 flex flex-1 flex-col">
          <nav className="flex flex-col">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-stone/60 py-4 text-base font-medium text-charcoal"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <Button asChild variant="primary" surface="light" className="w-full" onClick={close}>
              <Link href="/join">Register</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
