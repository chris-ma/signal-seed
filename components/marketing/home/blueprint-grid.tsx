import { cn } from "@/lib/utils";

interface BlueprintGridProps {
  className?: string;
}

const VERTICAL_LINES = [120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320];
const HORIZONTAL_LINES = [80, 160, 240, 320, 400, 480, 560];

export function BlueprintGrid({ className }: BlueprintGridProps) {
  return (
    <svg
      viewBox="0 0 1440 620"
      preserveAspectRatio="none"
      className={cn("absolute inset-0 h-full w-full text-stone/15", className)}
      aria-hidden
    >
      {VERTICAL_LINES.map((x) => (
        <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="620" stroke="currentColor" strokeWidth="1" />
      ))}
      {HORIZONTAL_LINES.map((y) => (
        <line key={`h-${y}`} x1="0" y1={y} x2="1440" y2={y} stroke="currentColor" strokeWidth="1" />
      ))}
    </svg>
  );
}
