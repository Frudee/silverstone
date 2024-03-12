import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/layout/Footer";

describe("footer", () => {
  it("renders footer correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
