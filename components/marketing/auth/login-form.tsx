"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { labelClass, inputClass } from "@/components/marketing/auth/field-styles";

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h1 className="font-serif text-2xl text-charcoal">Log in</h1>
      <p className="mt-2 text-sm text-charcoal/60">
        Welcome back. Pick up your project where you left off.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-2xl border border-stone/60 bg-sand/40 p-5 text-sm text-charcoal/75">
          Login isn&apos;t connected yet — join the waitlist instead.{" "}
          <Link href="/join" className="font-medium underline underline-offset-2">
            Join Signal Seed
          </Link>
          .
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
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
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
          <Button type="submit" variant="primary" surface="light" className="w-full">
            Log in
          </Button>
        </form>
      )}

      <p className="mt-8 text-sm text-charcoal/60">
        New to Signal Seed?{" "}
        <Link href="/join" className="font-medium text-charcoal underline underline-offset-2">
          Join instead
        </Link>
      </p>
    </div>
  );
}
