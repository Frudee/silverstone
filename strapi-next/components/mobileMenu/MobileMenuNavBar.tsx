import ListItem from "./ListItem";

export interface MobileMenuNavBarProps {
  toggleMenu: () => void;
}

const MobileMenuNavBar: React.FC<MobileMenuNavBarProps> = ({ toggleMenu }) => {
  return (
    <nav className=" flex-1">
      <ul className="flex flex-col gap-2 items-center">
        <ListItem
          href="/catalogue"
          text="Каталог"
          primary
          toggleMenu={toggleMenu}
        />
        <ListItem href="/" text="Главная" toggleMenu={toggleMenu} />
        <ListItem href="/contacts" text="Контакты" toggleMenu={toggleMenu} />
        <ListItem href="/about" text="О нас" toggleMenu={toggleMenu} />
      </ul>
    </nav>
  );
};

export default MobileMenuNavBar;
