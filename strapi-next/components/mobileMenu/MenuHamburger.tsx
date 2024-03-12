export interface MenuHamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuHamburger: React.FC<MenuHamburgerProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
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
  );
};

export default MenuHamburger;
