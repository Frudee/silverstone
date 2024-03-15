import Link from "next/link";

interface ListItemProps {
  href: string;
  text: string;
  primary?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ href, text, primary }) => {
  return (
    <li
      className={`${
        primary && "bg-primary text-white"
      } px-2 py-1 border w-2/3 text-center`}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default ListItem;
