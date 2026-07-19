import { PHASES, getFrameworksByPhase } from "@/lib/frameworks-data";

export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavColumn {
  heading: string;
  href: string;
  items: NavLinkItem[];
}

export interface NavItem {
  label: string;
  href: string;
  type: "link" | "mega";
  columns?: NavColumn[];
}

export const PRIMARY_NAV: NavItem[] = [
  { label: "Explore", href: "/explore", type: "link" },
  { label: "Tools", href: "/tools", type: "link" },
  {
    label: "Frameworks",
    href: "/frameworks",
    type: "mega",
    columns: PHASES.map((phase) => ({
      heading: phase.shortName,
      href: `/frameworks#${phase.slug}`,
      items: getFrameworksByPhase(phase.slug).map((framework) => ({
        label: framework.name,
        href: `/frameworks/${framework.slug}`,
        description: framework.tagline,
      })),
    })),
  },
  { label: "Resources", href: "/resources", type: "link" },
  { label: "Pricing", href: "/pricing", type: "link" },
];
