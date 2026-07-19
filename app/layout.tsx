import type { Metadata } from "next";
import { lora, inter, plexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Signal Seed — From ideation to validation",
  description:
    "Signal Seed is an AI-guided innovation operating system that helps teams turn uncertain ideas into validated opportunities through structured thinking and evidence, not hype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
