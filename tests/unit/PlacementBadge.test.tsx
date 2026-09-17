import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PlacementBadge } from "@/components/ui/PlacementBadge";

describe("PlacementBadge", () => {
  it("zero-pads the total and renders 'Placement 0X / 0Y'", () => {
    render(<PlacementBadge current="01" total={5} />);
    expect(screen.getByText("Placement 01 / 05")).toBeInTheDocument();
  });
});
