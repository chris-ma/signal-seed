import { cn } from "@/lib/utils";

interface BlueprintGridProps {
  className?: string;
}

export function BlueprintGrid({ className }: BlueprintGridProps) {
  return (
    <svg
      viewBox="0 0 1440 620"
      preserveAspectRatio="none"
      className={cn("absolute inset-0 h-full w-full text-stone/15", className)}
      aria-hidden
    >
      <line x1="360" y1="0" x2="360" y2="620" stroke="currentColor" strokeWidth="1" />
      <line x1="600" y1="0" x2="600" y2="620" stroke="currentColor" strokeWidth="1" />
      <line x1="840" y1="0" x2="840" y2="620" stroke="currentColor" strokeWidth="1" />
      <line x1="1080" y1="0" x2="1080" y2="620" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="150" x2="1440" y2="150" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="310" x2="1440" y2="310" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="470" x2="1440" y2="470" stroke="currentColor" strokeWidth="1" />
      <circle cx="720" cy="360" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="720" cy="360" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
