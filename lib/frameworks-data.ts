export type IconName =
  | "discover"
  | "research"
  | "interview"
  | "ideate"
  | "prototype"
  | "validate"
  | "iterate"
  | "growth"
  | "ai"
  | "insights";

export type PhaseSlug =
  | "problem-definition"
  | "solution-ideation"
  | "concept-selection"
  | "validation-design"
  | "decision-next-steps";

export interface Phase {
  slug: PhaseSlug;
  number: 1 | 2 | 3 | 4 | 5;
  name: string;
  shortName: string;
  goal: string;
  icon: IconName;
}

export interface FrameworkStep {
  step: number;
  title: string;
  detail?: string;
}

export interface WorkedExample {
  scenario: string;
  content: string[];
}

export interface Framework {
  slug: string;
  name: string;
  phase: PhaseSlug;
  tagline: string;
  useWhen: string[];
  timeEstimate: string;
  steps: FrameworkStep[];
  example?: WorkedExample;
  output: string;
}

export const PHASES: Phase[] = [
  {
    slug: "problem-definition",
    number: 1,
    name: "Problem Definition & Root-Cause Analysis",
    shortName: "Problem Definition",
    goal: "Make sure you're solving the right problem, not a symptom.",
    icon: "discover",
  },
  {
    slug: "solution-ideation",
    number: 2,
    name: "Solution Ideation",
    shortName: "Solution Ideation",
    goal: "Create multiple solution options, not just one.",
    icon: "ideate",
  },
  {
    slug: "concept-selection",
    number: 3,
    name: "Concept Selection",
    shortName: "Concept Selection",
    goal: "Narrow many ideas to a few testable concepts.",
    icon: "insights",
  },
  {
    slug: "validation-design",
    number: 4,
    name: "Validation Design",
    shortName: "Validation Design",
    goal: "Design lean tests for your top concepts before a big build.",
    icon: "validate",
  },
  {
    slug: "decision-next-steps",
    number: 5,
    name: "Decision & Next Steps",
    shortName: "Decision & Next Steps",
    goal: "Decide what to build, pivot, or kill, based on evidence.",
    icon: "iterate",
  },
];

export const FRAMEWORKS: Framework[] = [
  // Phase 1 — Problem Definition & Root-Cause Analysis
  {
    slug: "problem-statement-canvas",
    name: "Problem Statement Canvas",
    phase: "problem-definition",
    tagline:
      "A one-page frame that turns a vague complaint into a problem worth solving.",
    useWhen: [
      "You have a vague complaint (“conversion is low”, “onboarding sucks”).",
      "Stakeholders disagree on what the real problem even is.",
    ],
    timeEstimate: "30–45 min",
    steps: [
      {
        step: 1,
        title: "Write a one-sentence problem",
        detail: "Who is affected, what is happening, where/when, and the impact.",
      },
      {
        step: 2,
        title: "Find the highest-leverage point",
        detail:
          "Ask: “If we solved only one thing, what would make the biggest difference?”",
      },
      {
        step: 3,
        title: "Capture constraints",
        detail: "Time, technology, policy — anything that bounds the solution space.",
      },
    ],
    output: "A shared, specific problem statement the team agrees on.",
  },
  {
    slug: "5-whys",
    name: "5 Whys",
    phase: "problem-definition",
    tagline:
      "Ask “why” five times to move past symptoms and reach the root cause.",
    useWhen: ["You suspect you're looking at a symptom, not the cause."],
    timeEstimate: "20–30 min",
    steps: [
      { step: 1, title: "Write the problem statement at the top." },
      { step: 2, title: "Ask “Why does this happen?” and capture the answer." },
      {
        step: 3,
        title: "Treat that answer as the new problem",
        detail: "Ask “Why?” again.",
      },
      {
        step: 4,
        title: "Repeat",
        detail: "About 5 times, or until the cause is specific, systemic, and actionable.",
      },
    ],
    example: {
      scenario: "Users drop off at step 3 of onboarding.",
      content: [
        "Problem: Users drop off at step 3 of onboarding.",
        "Why? → They don't understand what to do.",
        "Why? → The copy is vague and uses internal jargon.",
        "Why? → No one owns onboarding copy; it's written by whoever ships the feature.",
        "Why? → We have no onboarding owner or content standard.",
        "Why? → Onboarding was never defined as a product area with clear metrics.",
        "Root cause: No defined onboarding ownership or standards.",
      ],
    },
    output: "1–3 root causes you can actually address.",
  },
  {
    slug: "fishbone-diagram",
    name: "Fishbone (Ishikawa) Diagram",
    phase: "problem-definition",
    tagline:
      "Map every plausible cause of a problem across categories before committing to one.",
    useWhen: ["The problem likely has multiple causes across people/process/tech."],
    timeEstimate: "30–45 min",
    steps: [
      {
        step: 1,
        title: "Draw the fishbone",
        detail:
          "Categories such as People, Process, Product, Data, Policy, Environment.",
      },
      {
        step: 2,
        title: "Brainstorm causes per category",
        detail: "For each category, list causes that could contribute to the problem.",
      },
      {
        step: 3,
        title: "Prioritize",
        detail: "Use this map to identify where to apply 5 Whys next.",
      },
    ],
    output: "A visual map of potential causes to prioritize.",
  },
  {
    slug: "affinity-diagram",
    name: "Affinity Diagram",
    phase: "problem-definition",
    tagline:
      "Turn a pile of loose observations into a small number of clear themes.",
    useWhen: [
      "You have lots of qualitative data (interviews, support tickets, logs) and need to find patterns.",
    ],
    timeEstimate: "30–60 min",
    steps: [
      {
        step: 1,
        title: "One note per insight",
        detail: "Write each insight or quote on a sticky note, digital or physical.",
      },
      {
        step: 2,
        title: "Group in silence",
        detail: "Silently group similar notes into clusters.",
      },
      {
        step: 3,
        title: "Name each cluster",
        detail:
          "E.g. “Confusion about pricing”, “Trust issues”, “Performance complaints”.",
      },
    ],
    output: "Clear themes to feed into 5 Whys / Fishbone.",
  },

  // Phase 2 — Solution Ideation
  {
    slug: "how-might-we",
    name: "HMW (How Might We) Questions",
    phase: "solution-ideation",
    tagline:
      "Reframe a root cause as an open, optimistic question that invites solutions.",
    useWhen: [
      "You have a clear problem/root cause and want to open the solution space.",
    ],
    timeEstimate: "15–20 min",
    steps: [
      {
        step: 1,
        title: "Turn each root cause into a question",
        detail: "Write 1–3 “How might we…?” questions per root cause.",
      },
      {
        step: 2,
        title: "Use as prompts",
        detail:
          "Example: “HMW make onboarding ownership explicit and measurable?”",
      },
    ],
    output: "3–7 HMW questions that guide ideation.",
  },
  {
    slug: "structured-brainstorming",
    name: "Structured Brainstorming",
    phase: "solution-ideation",
    tagline: "Generate a high volume of ideas quickly, under clear rules.",
    useWhen: ["You need many ideas quickly from the team."],
    timeEstimate: "30–45 min",
    steps: [
      {
        step: 1,
        title: "Set the rules",
        detail:
          "No judgment, one idea per sticky, build on others, aim for quantity.",
      },
      {
        step: 2,
        title: "Time-box it",
        detail: "E.g. 5 minutes silent idea writing, then 10 minutes sharing.",
      },
      {
        step: 3,
        title: "Prompt with HMWs",
        detail: "Use your HMW questions to focus the session.",
      },
    ],
    output: "30–100 raw ideas.",
  },
  {
    slug: "scamper",
    name: "SCAMPER",
    phase: "solution-ideation",
    tagline: "Seven prompts that systematically vary an existing solution.",
    useWhen: ["You want to systematically vary existing solutions."],
    timeEstimate: "30–45 min",
    steps: [
      { step: 1, title: "Substitute", detail: "What can we replace?" },
      { step: 2, title: "Combine", detail: "What can we merge?" },
      { step: 3, title: "Adapt", detail: "What can we copy from elsewhere?" },
      { step: 4, title: "Modify", detail: "What can we change (scale, shape, rules)?" },
      { step: 5, title: "Put to other use", detail: "Who else could use this?" },
      { step: 6, title: "Eliminate", detail: "What can we remove?" },
      { step: 7, title: "Reverse", detail: "What if we did the opposite?" },
    ],
    output: "New solution variants you wouldn't have thought of otherwise.",
  },
  {
    slug: "affinity-clustering",
    name: "Affinity Clustering of Solutions",
    phase: "solution-ideation",
    tagline: "Group a wall of raw ideas into a manageable set of solution directions.",
    useWhen: ["You have a wall of ideas and need order."],
    timeEstimate: "20–30 min",
    steps: [
      {
        step: 1,
        title: "Group similar ideas",
        detail:
          "E.g. “Onboarding redesign”, “Better docs”, “In-app guidance”.",
      },
      { step: 2, title: "Name each cluster", detail: "As a distinct solution direction." },
    ],
    output: "3–7 solution directions.",
  },

  // Phase 3 — Concept Selection
  {
    slug: "impact-effort-matrix",
    name: "Impact–Effort Matrix",
    phase: "concept-selection",
    tagline: "Plot every concept on impact versus effort to find quick wins.",
    useWhen: ["You need to prioritize quickly with the team."],
    timeEstimate: "20–30 min",
    steps: [
      { step: 1, title: "Draw the grid", detail: "Impact (low→high) vs Effort (low→high)." },
      { step: 2, title: "Place each concept", detail: "As a team, plot every solution direction." },
      {
        step: 3,
        title: "Focus",
        detail: "Prioritize high-impact, low/medium-effort ideas first.",
      },
    ],
    output: "2–4 priority concepts to take forward.",
  },
  {
    slug: "pugh-matrix",
    name: "Pugh Matrix",
    phase: "concept-selection",
    tagline: "Score alternatives against a baseline to make a structured decision.",
    useWhen: ["You have a few strong options and need a structured decision."],
    timeEstimate: "30–45 min",
    steps: [
      { step: 1, title: "Pick a baseline", detail: "Current approach or simplest option." },
      {
        step: 2,
        title: "Define criteria",
        detail: "E.g. user value, effort, risk, strategic fit.",
      },
      {
        step: 3,
        title: "Score each alternative",
        detail: "+1 (better), 0 (same), –1 (worse) vs. baseline.",
      },
      { step: 4, title: "Sum and discuss", detail: "Sum scores; discuss outliers." },
    ],
    output: "A reasoned shortlist of 1–3 concepts to validate.",
  },

  // Phase 4 — Validation Design
  {
    slug: "assumptions-mapping",
    name: "Assumptions Mapping",
    phase: "validation-design",
    tagline: "Rate every assumption behind a concept by importance and uncertainty.",
    useWhen: ["You have a concept but aren't sure what to test first."],
    timeEstimate: "20–30 min",
    steps: [
      {
        step: 1,
        title: "List every assumption",
        detail:
          "E.g. “Users care about X”, “They'll click Y”, “This reduces time by 30%”.",
      },
      { step: 2, title: "Rate each", detail: "By importance and by uncertainty." },
      {
        step: 3,
        title: "Pick the top few",
        detail: "The top 2–3 high-importance, high-uncertainty assumptions to test.",
      },
    ],
    output: "A small set of critical hypotheses.",
  },
  {
    slug: "experiment-canvas",
    name: "Experiment Canvas",
    phase: "validation-design",
    tagline: "A clear, testable plan for each hypothesis you need to validate.",
    useWhen: ["You want a clear, testable plan for each hypothesis."],
    timeEstimate: "20–30 min per concept",
    steps: [
      {
        step: 1,
        title: "Hypothesis",
        detail: "“We believe [X] will cause [Y] for [user].”",
      },
      {
        step: 2,
        title: "Test",
        detail: "Landing page, prototype test, A/B, interview script, etc.",
      },
      {
        step: 3,
        title: "Metric",
        detail: "What will you measure? (CTR, signups, task success, time saved)",
      },
      { step: 4, title: "Threshold", detail: "What result means “pass”?" },
      {
        step: 5,
        title: "Next step",
        detail: "If pass → what? If fail → what?",
      },
    ],
    output: "1–3 concrete experiments per concept.",
  },
  {
    slug: "mom-test-interview-guide",
    name: "Mom Test Interview Guide",
    phase: "validation-design",
    tagline:
      "Validate problems and solutions through interviews, without leading the witness.",
    useWhen: [
      "You want to validate problems/solutions via user interviews without bias.",
    ],
    timeEstimate: "Prep + interviews",
    steps: [
      {
        step: 1,
        title: "Ask about the past, not opinions",
        detail:
          "Bad: “Would you use this?” Good: “Tell me about the last time you faced this problem. What did you try? What did you pay for?”",
      },
      {
        step: 2,
        title: "Guide, don't pitch",
        detail:
          "Use the problem and solution concepts to guide the conversation, not to pitch them.",
      },
    ],
    output: "Qualitative evidence on whether the problem/solution is real and valuable.",
  },

  // Phase 5 — Decision & Next Steps
  {
    slug: "evidence-wall",
    name: "Evidence Wall / Decision Board",
    phase: "decision-next-steps",
    tagline: "Lay out every test and its result to make a clear go/no-go call.",
    useWhen: ["You have multiple tests and need a clear go/no-go."],
    timeEstimate: "30–45 min",
    steps: [
      {
        step: 1,
        title: "Lay out each concept",
        detail: "Key hypotheses, experiments run, results (metrics + quotes).",
      },
      {
        step: 2,
        title: "Apply simple rules",
        detail:
          "Strong evidence on problem + solution → Build. Problem yes, solution no → Pivot solution. Problem weak → Kill or reframe problem.",
      },
    ],
    output: "A clear decision and next actions.",
  },
];

export function getFrameworksByPhase(phase: PhaseSlug): Framework[] {
  return FRAMEWORKS.filter((f) => f.phase === phase);
}

export function getFrameworkBySlug(slug: string): Framework | undefined {
  return FRAMEWORKS.find((f) => f.slug === slug);
}

export function getAllFrameworkSlugs(): string[] {
  return FRAMEWORKS.map((f) => f.slug);
}

export function getPhaseBySlug(slug: PhaseSlug): Phase | undefined {
  return PHASES.find((p) => p.slug === slug);
}
