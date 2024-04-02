import Image from "next/image";
import logoSM from "../../public/logo-sm.svg";
import logo from "../../public/logo.svg";
import MobileMenu from "../mobileMenu/MobileMenu";
import DesktopMenu from "../desktopMenu/DesktopMenu";
import Breadcrumbs from "../common/Breadcrumbs";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="py-6 px-4 lg:px-[10%] xl:px-[20%] flex lg:flex-wrap justify-between lg:justify-normal relative items-center">
        <Image className="lg:hidden" src={logoSM} alt="logo" height={50} />
        <Image className="hidden lg:block" src={logo} alt="logo" height={50} />
        <MobileMenu />
        <DesktopMenu />
        <div className="hidden lg:flex flex-col min-w-fit max-w-fit lg:ml-auto">
          <span>+7 (495) 123-45-67</span>
          <span className="text-xs leading-3">г. Челябинск</span>
        </div>
      </nav>
      <Breadcrumbs />
    </header>
  );
};

export default Header;
