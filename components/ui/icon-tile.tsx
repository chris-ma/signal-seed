import * as React from "react";

import { cn } from "@/lib/utils";
import { ICONS } from "@/components/icons";
import type { IconName } from "@/lib/frameworks-data";

interface IconTileProps {
  icon: IconName;
  tone?: "light" | "dark";
  className?: string;
}

function IconTile({ icon, tone = "light", className }: IconTileProps) {
  const Icon = ICONS[icon];
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border",
        tone === "light"
          ? "border-forest/15 bg-sage/40 text-forest"
          : "border-bone/20 bg-bone/10 text-sage",
        className,
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}

export { IconTile };
