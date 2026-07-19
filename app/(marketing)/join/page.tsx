import type { Metadata } from "next";

import { AuthSplitLayout } from "@/components/marketing/auth/auth-split-layout";
import { JoinForm } from "@/components/marketing/auth/join-form";

export const metadata: Metadata = { title: "Join — Signal Seed" };

export default function JoinPage() {
  return (
    <AuthSplitLayout>
      <JoinForm />
    </AuthSplitLayout>
  );
}
