import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileMenu from "../../../components/mobileMenu/MobileMenu";

const originalQuerySelector = document.querySelector;
document.querySelector = jest
  .fn()
  .mockReturnValue({ style: { overflow: "auto" } });

describe("handleScroll", () => {
  it("handle body overflow style", () => {
    render(<MobileMenu />);

    const body = document.querySelector("body");

    expect(body?.style.overflow).toBe("auto");
    fireEvent.click(screen.getByRole("button"));
    expect(body?.style.overflow).toBe("hidden");

    fireEvent.click(screen.getByRole("button"));
    expect(body?.style.overflow).toBe("auto");
  });
});

describe("handleResize", () => {
  it("handles window resize and sets body overflow accordingly", () => {
    document.querySelector = jest
      .fn()
      .mockReturnValue({ style: { overflow: "hidden" } });
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1100,
    });

    const setIsOpen = jest.fn();
    const originalAddEventListener = window.addEventListener;
    const originalRemoveEventListener = window.removeEventListener;

    window.addEventListener = jest.fn((event, cb: any) => {
      if (event === "resize") {
        cb();
        setIsOpen(false);
      }
    });
    window.removeEventListener = jest.fn();

    render(<MobileMenu />);

    expect(document.querySelector).toHaveBeenCalledWith("body");
    expect(document.querySelector("body")?.style.overflow).toBe("auto");
    expect(setIsOpen).toHaveBeenCalledWith(false);

    document.querySelector = originalQuerySelector;
    window.addEventListener = originalAddEventListener;
    window.removeEventListener = originalRemoveEventListener;
  });
});
