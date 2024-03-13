import ListItem from "./ListItem";

export interface MobileMenuNavBarProps {
  toggleMenu: (event: React.MouseEvent<HTMLUListElement>) => void;
}

const MobileMenuNavBar: React.FC<MobileMenuNavBarProps> = ({ toggleMenu }) => {
  return (
    <nav className=" flex-1">
      <ul className="flex flex-col gap-2 items-center" onClick={toggleMenu}>
        <ListItem href="/catalogue" text="Каталог" primary />
        <ListItem href="/" text="Главная" />
        <ListItem href="/contacts" text="Контакты" />
        <ListItem href="/about" text="О нас" />
      </ul>
    </nav>
  );
};

export default MobileMenuNavBar;
