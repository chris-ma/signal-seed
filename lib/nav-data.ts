export interface NavLinkItem {
  label: string;
  href: string;
}

export const PRIMARY_NAV: NavLinkItem[] = [
  { label: "Explore", href: "/explore" },
  { label: "Tools", href: "/tools" },
  { label: "Frameworks", href: "/frameworks" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
];

export const HEADER_NAV: NavLinkItem[] = [
  { label: "Discover", href: "/discover" },
  { label: "Research", href: "/research" },
  { label: "Ideate", href: "/ideate" },
  { label: "Validate", href: "/validate" },
  { label: "Iterate", href: "/iterate" },
];
