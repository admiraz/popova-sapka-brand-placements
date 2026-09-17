import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatCard } from "@/components/ui/StatCard";

describe("StatCard", () => {
  it("renders the title, detail, and an aria-hidden ghost numeral", () => {
    render(
      <StatCard id="01" icon="sun" title="100–150k" detail="Resort visits in a normal winter season" />,
    );

    expect(screen.getByText("100–150k")).toBeInTheDocument();
    expect(screen.getByText("Resort visits in a normal winter season")).toBeInTheDocument();

    const ghosts = screen.getAllByText("01");
    const ghost = ghosts.find((el) => el.getAttribute("aria-hidden") === "true");
    expect(ghost).toBeDefined();
    expect(ghost).toHaveAttribute("data-ghost", "");
  });
});
