"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/lib/nav-data";

interface MobileNavProps {
  items: NavItem[];
  isOverDark: boolean;
}

export function MobileNav({ items, isOverDark }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
            isOverDark ? "text-bone" : "text-charcoal",
          )}
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent title="Site navigation">
        <div className="mt-8 flex flex-1 flex-col">
          <nav className="flex flex-col">
            {items.map((item) =>
              item.type === "mega" ? (
                <Accordion.Root type="single" collapsible key={item.label}>
                  <Accordion.Item value={item.label} className="border-b border-stone/60">
                    <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left text-base font-medium text-charcoal outline-none">
                      {item.label}
                      <ChevronDown className="h-4 w-4 text-graphite transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden pb-4">
                      {item.columns?.map((column) => (
                        <div key={column.heading} className="mb-4">
                          <p className="eyebrow mb-2 text-graphite">{column.heading}</p>
                          <ul className="space-y-2">
                            {column.items.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={close}
                                  className="text-sm text-charcoal/80"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className="border-b border-stone/60 py-4 text-base font-medium text-charcoal"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Button asChild variant="secondary" surface="light" onClick={close}>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild variant="primary" surface="light" onClick={close}>
              <Link href="/join">Join</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
