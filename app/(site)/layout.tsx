import type { ReactNode } from "react";
import { PageTransition } from "@/components/motion/page-transition";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}
