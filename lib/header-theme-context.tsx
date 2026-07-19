"use client";

import * as React from "react";

interface HeaderThemeContextValue {
  isOverDark: boolean;
  setIsOverDark: (value: boolean) => void;
}

const HeaderThemeContext = React.createContext<HeaderThemeContextValue | null>(null);

export function HeaderThemeProvider({ children }: { children: React.ReactNode }) {
  const [isOverDark, setIsOverDark] = React.useState(false);
  const value = React.useMemo(() => ({ isOverDark, setIsOverDark }), [isOverDark]);
  return (
    <HeaderThemeContext.Provider value={value}>{children}</HeaderThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  const ctx = React.useContext(HeaderThemeContext);
  if (!ctx) {
    throw new Error("useHeaderTheme must be used within a HeaderThemeProvider");
  }
  return ctx;
}

/** Placed at the bottom of the homepage Hero; flips the header theme while it's on screen. */
export function HeroThemeSentinel() {
  const { setIsOverDark } = useHeaderTheme();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsOverDark(entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [setIsOverDark]);

  return <div ref={ref} aria-hidden className="h-px w-full" />;
}
