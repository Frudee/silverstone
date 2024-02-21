import React, { useState, useEffect } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isOpen ? "auto" : "hidden";
    }
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="">
        <span
          className={`${
            isOpen && "transform rotate-45 translate-y-2"
          } block h-[2px] w-7 bg-black mb-1 rounded-lg`}
        ></span>
        <span
          className={`${
            isOpen ? "opacity-0" : "opacity-100"
          } block h-[2px] w-7 bg-black mb-1 rounded-lg`}
        ></span>
        <span
          className={`${
            isOpen && "transform -rotate-45 -translate-y-1"
          } block h-[2px] w-7 bg-black mb-1 rounded-lg`}
        ></span>
      </button>
      {isOpen && (
        <div className="absolute top-[74.22px] right-0 bg-gray-800 p-4 w-screen h-[calc(100vh-74.22px)]">
          {/* Your menu content goes here */}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
