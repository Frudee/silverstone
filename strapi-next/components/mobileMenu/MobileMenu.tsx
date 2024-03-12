import Link from "next/link";
import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import logo from "../../public/logo-sm.svg";
import Image from "next/image";

/**
 * Defines a mobile menu component with toggle functionality and useEffect for handling window resize.
 *
 * @returns {JSX.Element} The mobile menu component
 */

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isOpen ? "auto" : "hidden";
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleScroll();
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
    <div className="lg:hidden flex flex-col justify-center">
      <button onClick={toggleMenu} className="">
        <span
          className={`${
            isOpen && "transform rotate-45 translate-y-2"
          } block h-[2px] w-7 bg-black mb-1 rounded-lg duration-300`}
        ></span>
        <span
          className={`${
            isOpen ? "opacity-0" : "opacity-100"
          } block h-[2px] w-7 bg-black mb-1 rounded-lg duration-300`}
        ></span>
        <span
          className={`${
            isOpen && "transform -rotate-45 -translate-y-1"
          } block h-[2px] w-7 bg-black rounded-lg duration-300`}
        ></span>
      </button>
      {isOpen && (
        <div className="absolute top-[74.22px] flex flex-col right-0 bg-gray-100 p-4 w-screen h-[calc(100vh-74.22px)]">
          <nav className=" flex-1">
            <ul className="flex flex-col gap-2 items-center">
              <ListItem
                href="/catalogue"
                text="Каталог"
                primary
                toggleMenu={toggleMenu}
              />
              <ListItem href="/" text="Главная" toggleMenu={toggleMenu} />
              <ListItem
                href="/contacts"
                text="Контакты"
                toggleMenu={toggleMenu}
              />
              <ListItem href="/about" text="О нас" toggleMenu={toggleMenu} />
            </ul>
          </nav>
          <div className="mt-auto flex-shrink-0">
            <Link href="/" onClick={toggleMenu}>
              <Image src={logo} alt="logo" width={50} height={50} priority />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
