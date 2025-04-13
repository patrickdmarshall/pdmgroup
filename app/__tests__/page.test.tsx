import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home", () => {
  it("renders the main sections", () => {
    render(<Home />);

    // Check for main sections
    expect(screen.getByRole("main")).toBeInTheDocument();

    // Check for navigation
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Check for footer
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
