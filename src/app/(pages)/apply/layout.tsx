import type { ReactNode } from "react";

import PageBar from "@/components/element/PageBar";

export default function ApplyLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-1 flex-col bg-white">
      <PageBar title="入会申請" />
      {children}
    </section>
  );
}
