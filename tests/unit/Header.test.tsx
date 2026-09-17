import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/layout/Header";
import { LOCALES } from "@/lib/i18n";

describe.each(LOCALES)("Header (%s)", (locale) => {
  it("renders the logo link back to top", () => {
    render(<Header locale={locale} />);
    const links = screen.getAllByRole("link");
    expect(links.some((link) => link.getAttribute("href") === "#top")).toBe(true);
  });

  it("does not render a primary nav link list", () => {
    render(<Header locale={locale} />);
    expect(screen.queryByRole("navigation", { name: "Primary" })).not.toBeInTheDocument();
  });
});
