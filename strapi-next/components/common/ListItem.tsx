import Link from "next/link";

interface ListItemProps {
  href: string;
  text: string;
  primary?: boolean;
  toggleMenu?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  href,
  text,
  primary,
  toggleMenu,
}) => {
  return (
    <li
      className={`${
        primary && "bg-primary text-white"
      } px-2 py-1 border w-2/3 text-center`}
      onClick={toggleMenu}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default ListItem;
