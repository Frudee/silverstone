import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-sm.svg";
import MobileMenu from "../mobileMenu/MobileMenu";
import DesktopMenu from "../DesktopMenu";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="py-3 px-4 lg:px-[20%] flex justify-between lg:justify-normal relative items-center">
        <Image src={logo} alt="logo" height={50} />
        <MobileMenu />
        <DesktopMenu />
        <div className="hidden lg:block lg:ml-auto">
          <span>+7 (495) 123-45-67</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
