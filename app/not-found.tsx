import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { NotFoundContent } from "@/components/marketing/not-found-content";

export default function RootNotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <NotFoundContent />
      </main>
      <SiteFooter />
    </>
  );
}
