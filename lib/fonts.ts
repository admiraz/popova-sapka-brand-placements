import { Nunito, Rubik, Yellowtail } from "next/font/google";

// Shared across all three per-locale root layouts (see app/(en)/layout.tsx,
// app/(mk)/mk/layout.tsx, app/(sq)/sq/layout.tsx) so the font files are
// generated once, not redeclared per locale.
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-rubik",
  display: "swap",
});

export const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
  display: "swap",
});

export const FONT_VARIABLES = `${nunito.variable} ${rubik.variable} ${yellowtail.variable}`;
