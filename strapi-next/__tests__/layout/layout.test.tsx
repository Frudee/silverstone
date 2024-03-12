import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "../../components/layout/Layout";

jest.mock("../../components/layout/Header", () => () => (
  <div data-testid="header" />
));
jest.mock("../../components/layout/Footer", () => () => (
  <div data-testid="footer" />
));

describe("layout", () => {
  it("renders layout correctly", () => {
    const { getByTestId } = render(<Layout>Test Content</Layout>);
    const textElement = screen.getByText("Test Content");

    expect(getByTestId("header")).toBeInTheDocument();
    expect(getByTestId("footer")).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
