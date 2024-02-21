import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-sm.svg";
import MobileMenu from "../mobileMenu/MobileMenu";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="py-3 px-4 flex justify-between relative items-center">
        <Image src={logo} alt="logo" height={50} />
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
