import Link from "next/link";

const DesktopMenu: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-10">
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/catalogue">Каталог</Link>
        </li>
        <li>
          <Link href="/about">О нас</Link>
        </li>
        <li>
          <Link href="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
