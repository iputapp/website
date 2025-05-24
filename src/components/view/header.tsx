"use client";

import Link from "next/link";

import IputappLogo from "@/assets/logo/iputapp_namelogo_black 1.svg";
import { ButtonLink } from "@/components/element/ButtonLink";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <IputappLogo className="h-auto w-[clamp(220px,40vw,300px)]" />
          </Link>
          <ButtonLink href="/apply" text="加入する" />
        </div>
      </div>
    </header>
  );
}
