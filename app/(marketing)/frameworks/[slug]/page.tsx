import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  getAllFrameworkSlugs,
  getFrameworkBySlug,
  getPhaseBySlug,
} from "@/lib/frameworks-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllFrameworkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const framework = getFrameworkBySlug(slug);
  if (!framework) return {};
  return {
    title: `${framework.name} — SeedStudio Frameworks`,
    description: framework.tagline,
  };
}

export default async function FrameworkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const framework = getFrameworkBySlug(slug);
  if (!framework) notFound();

  const phase = getPhaseBySlug(framework.phase);

  return (
    <>
      <Section tone="charcoal" className="pt-36 pb-16 md:pt-44">
        <Link href="/frameworks" className="eyebrow text-sage transition-colors hover:text-bone">
          ← {phase?.shortName}
        </Link>
        <h1 className="text-display-sm md:text-display mt-6 max-w-3xl text-bone">
          {framework.name}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-bone/70 md:text-lg">{framework.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Badge tone="dark">{framework.timeEstimate}</Badge>
          <Badge tone="dark">
            Phase {phase?.number} — {phase?.shortName}
          </Badge>
        </div>
      </Section>

      <Section tone="bone">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow text-graphite">Use when</p>
            <ul className="mt-4 space-y-3">
              {framework.useWhen.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-charcoal/75">
                  {item}
                </li>
              ))}
            </ul>
            <Separator className="my-8" />
            <p className="eyebrow text-graphite">Output</p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/75">{framework.output}</p>
          </div>

          <div>
            <p className="eyebrow text-graphite">How to run it</p>
            <ol className="mt-4 space-y-6">
              {framework.steps.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <span className="font-mono text-sm text-forest">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-serif text-base text-charcoal">{step.title}</p>
                    {step.detail ? (
                      <p className="mt-1 text-sm leading-relaxed text-charcoal/65">
                        {step.detail}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>

            {framework.example ? (
              <div className="mt-10 rounded-2xl border border-stone/60 bg-sand/40 p-6">
                <p className="eyebrow text-graphite">Example</p>
                <p className="mt-3 text-sm font-medium text-charcoal">
                  {framework.example.scenario}
                </p>
                <ul className="mt-4 space-y-2">
                  {framework.example.content.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-charcoal/75">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Section>
    </>
  );
}
