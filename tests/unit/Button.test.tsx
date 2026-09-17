import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders an anchor when href is provided", () => {
    render(
      <Button href="#placements" data-cta="see-placements">
        See the placements
      </Button>,
    );

    const link = screen.getByRole("link", { name: /see the placements/i });
    expect(link).toHaveAttribute("href", "#placements");
    expect(link).toHaveAttribute("data-cta", "see-placements");
  });

  it("renders a real button element and fires onClick when no href is given", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Submit</Button>);

    const button = screen.getByRole("button", { name: /submit/i });
    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("applies the primary variant's solid, AA-accessible cyan background by default", () => {
    render(<Button href="#contact">Request a proposal</Button>);
    // bg-cyan-dark (not the brighter --cyan) so the white label clears
    // WCAG AA contrast — see app/globals.css token notes.
    expect(screen.getByRole("link")).toHaveClass("bg-cyan-dark", "text-white");
  });

  it("applies the secondary variant's transparent styling", () => {
    render(
      <Button href="#contact" variant="secondary">
        Request a proposal
      </Button>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("bg-transparent");
    expect(link).not.toHaveClass("bg-cyan");
  });
});
