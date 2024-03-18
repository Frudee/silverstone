import Link from "next/link";
import React, { MouseEvent } from "react";
import MobileMenuNavBar from "./MobileMenuNavBar";
import logo from "../../public/logo-sm.svg";
import Image from "next/image";
import MenuHamburger from "./MenuHamburger";
import { useAutoCloseMenu } from "../../utils/hooks";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useAutoCloseMenu();

  const handleScroll = () => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isOpen ? "auto" : "hidden";
    }
  };

  const toggleMenu = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (
      target.tagName === "LI" ||
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.tagName === "SPAN"
    ) {
      setIsOpen(!isOpen);
      handleScroll();
    }
  };

  return (
    <div className="lg:hidden flex flex-col justify-center">
      <MenuHamburger isOpen={isOpen} toggleMenu={toggleMenu} />
      {isOpen && (
        <div className="absolute top-[74.22px] flex flex-col right-0 bg-gray-100 p-4 w-screen h-[calc(100vh-74.22px)]">
          <MobileMenuNavBar toggleMenu={toggleMenu} />
          <div className="mt-auto flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="logo" width={50} height={50} priority />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
