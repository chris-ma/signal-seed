import type { Metadata } from "next";

import { AuthSplitLayout } from "@/components/marketing/auth/auth-split-layout";
import { LoginForm } from "@/components/marketing/auth/login-form";

export const metadata: Metadata = { title: "Log in — SeedStudio" };

export default function LoginPage() {
  return (
    <AuthSplitLayout>
      <LoginForm />
    </AuthSplitLayout>
  );
}
