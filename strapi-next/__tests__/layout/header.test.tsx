import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../../components/layout/Header";

describe("header", () => {
  it("renders header correctly", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });
});
