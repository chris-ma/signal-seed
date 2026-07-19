"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { labelClass, inputClass } from "@/components/marketing/auth/field-styles";

export function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h1 className="font-serif text-2xl text-charcoal">Join SeedStudio</h1>
      <p className="mt-2 text-sm text-charcoal/60">
        Tell us a little about you and we&apos;ll be in touch about early access.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-2xl border border-stone/60 bg-sand/40 p-5 text-sm text-charcoal/75">
          Thank you — we&apos;ll be in touch.
        </div>
      ) : (
        <form
          className="mt-8 space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="space-y-2">
            <label htmlFor="name" className={labelClass}>
              Full name
            </label>
            <input id="name" name="name" type="text" required className={inputClass} />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className={labelClass}>
              Company / team <span className="normal-case text-graphite/60">(optional)</span>
            </label>
            <input id="company" name="company" type="text" className={inputClass} />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className={labelClass}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              className={inputClass}
            />
          </div>
          <label className="flex items-start gap-2.5 text-xs leading-relaxed text-charcoal/60">
            <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded border-stone" />
            I agree to be notified about early access.
          </label>
          <Button type="submit" variant="primary" surface="light" className="w-full">
            Join the waitlist
          </Button>
        </form>
      )}

      <p className="mt-8 text-sm text-charcoal/60">
        Already exploring with us?{" "}
        <Link href="/login" className="font-medium text-charcoal underline underline-offset-2">
          Log in
        </Link>
      </p>
    </div>
  );
}
