import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

describe("SectionEyebrow", () => {
  it("renders the numbered '0N / LABEL' form", () => {
    render(<SectionEyebrow number="01" label="THE OPPORTUNITY" />);
    expect(screen.getByText("01 / THE OPPORTUNITY")).toBeInTheDocument();
  });

  it("renders label-only when number is omitted (the rates annex eyebrow)", () => {
    render(<SectionEyebrow label="ANNEX" />);
    expect(screen.getByText("ANNEX")).toBeInTheDocument();
    expect(screen.queryByText(/\//)).not.toBeInTheDocument();
  });
});
