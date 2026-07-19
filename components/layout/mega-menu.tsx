"use client";

import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { GlassPanel } from "@/components/ui/glass-panel";
import type { NavItem } from "@/lib/nav-data";

interface MegaMenuProps {
  items: NavItem[];
  isOverDark: boolean;
}

export function MegaMenu({ items, isOverDark }: MegaMenuProps) {
  const linkClass = cn(
    "text-sm font-medium tracking-wide transition-colors duration-200",
    isOverDark ? "text-bone/85 hover:text-bone" : "text-charcoal/75 hover:text-charcoal",
  );

  return (
    <NavigationMenu.Root delayDuration={150} className="relative hidden md:block">
      <NavigationMenu.List className="flex items-center gap-8">
        {items.map((item) =>
          item.type === "mega" ? (
            <NavigationMenu.Item key={item.label}>
              <NavigationMenu.Trigger
                className={cn(linkClass, "group flex items-center gap-1 outline-none")}
              >
                {item.label}
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                className={cn(
                  "absolute inset-x-0 top-full z-40",
                  "data-[state=open]:animate-fade-in",
                )}
              >
                <GlassPanel tone={isOverDark ? "onDark" : "onLight"} className="mx-auto max-w-7xl">
                  <div className="grid grid-cols-2 gap-6 p-8 lg:grid-cols-5">
                    {item.columns?.map((column) => (
                      <div key={column.heading}>
                        <Link
                          href={column.href}
                          className="mb-4 block font-mono text-[11px] tracking-wide text-graphite uppercase transition-colors hover:text-current"
                        >
                          {column.heading}
                        </Link>
                        <ul className="space-y-3">
                          {column.items.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="block text-sm leading-snug transition-opacity hover:opacity-70"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-current/10 px-10 py-5">
                    <Link
                      href={item.href}
                      className="text-sm font-medium transition-opacity hover:opacity-70"
                    >
                      View all frameworks →
                    </Link>
                  </div>
                </GlassPanel>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ) : (
            <NavigationMenu.Item key={item.label}>
              <NavigationMenu.Link asChild>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ),
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
