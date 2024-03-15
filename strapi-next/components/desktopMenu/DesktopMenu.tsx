import ListItem from "./DesktopMenuListItem";

const DesktopMenu: React.FC = () => {
  return (
    <nav className="hidden lg:flex w-fit ml-[55px] h-[30px]">
      <ul className="flex flex-wrap gap-10 items-end">
        <ListItem href="/" text="Главная" />
        <ListItem href="/catalogue" text="Каталог" />
        <ListItem href="/contacts" text="Контакты" />
        <ListItem href="/about" text="О нас" />
      </ul>
    </nav>
  );
};

export default DesktopMenu;
