import { useEffect, useState } from "react";

export const useAutoCloseMenu = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const body = document.querySelector("body");
      if (body) {
        if (window.innerWidth > 1024) {
          body.style.overflow = "auto";
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return [isOpen, setIsOpen];
};
