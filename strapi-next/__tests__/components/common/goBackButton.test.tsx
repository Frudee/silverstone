import "@testing-library/jest-dom";
import GoBackButton from "../../../components/common/GoBackButton";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const backMock = jest.fn();

describe("goBackButton", () => {
  it("renders GoBackButton correctly and calls router back when clicked", () => {
    (useRouter as unknown as jest.Mock).mockReturnValue({ back: backMock });
    render(<GoBackButton />);

    const goBackButton = screen.getByRole("button", { name: "Go Back" });
    expect(goBackButton).toBeInTheDocument();

    fireEvent.click(goBackButton);
    expect(backMock).toHaveBeenCalled();
  });
});
