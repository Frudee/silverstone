import Link from "next/link";

interface ListItemProps {
  href: string;
  text: string;
}

const DesktopMenuListItem: React.FC<ListItemProps> = ({ href, text }) => {
  return (
    <li className={`text-lg uppercase font-medium leading-4`}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default DesktopMenuListItem;
