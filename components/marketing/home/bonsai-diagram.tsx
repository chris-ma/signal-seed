import { getHeroCalloutStages } from "@/lib/lifecycle-data";

export function BonsaiDiagram() {
  const stages = getHeroCalloutStages();

  return (
    <div className="flex flex-col gap-10">
      <svg
        viewBox="0 0 640 480"
        className="w-full text-sage/80"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M250 430h140l-14 34a8 8 0 0 1-8 6h-96a8 8 0 0 1-8-6z" />
        <path
          d="M320 430c0-55-8-85 8-118s48-55 30-102-58-70-30-126"
          strokeWidth={2}
        />
        <path d="M328 312c34 8 64 4 82-32" />
        <path d="M300 250c-32 14-56 6-80 46" />
        <path d="M338 190c24-6 40-30 46-70" />
        <path d="M312 130c-16-8-24-32-16-64" />
        <circle cx="404" cy="270" r="26" strokeDasharray="2 3" />
        <circle cx="212" cy="288" r="26" strokeDasharray="2 3" />
        <circle cx="378" cy="112" r="24" strokeDasharray="2 3" />
        <circle cx="292" cy="58" r="20" strokeDasharray="2 3" />
        <circle cx="330" cy="330" r="22" strokeDasharray="2 3" />
      </svg>

      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {stages.map((stage, index) => (
          <li key={stage.slug} className="flex items-start gap-3">
            <span className="font-mono text-xs text-sage">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-medium text-bone">{stage.name}</p>
              <p className="mt-0.5 text-xs leading-snug text-bone/55">
                {stage.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
