import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";
import { FONT_VARIABLES } from "@/lib/fonts";
import { SiteShell } from "@/components/layout/SiteShell";
import "../globals.css";

export const metadata: Metadata = buildMetadata("en");

export const viewport: Viewport = {
  themeColor: "#0e2748",
  width: "device-width",
  initialScale: 1,
};

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={FONT_VARIABLES}>
      <SiteShell locale="en">{children}</SiteShell>
    </html>
  );
}
