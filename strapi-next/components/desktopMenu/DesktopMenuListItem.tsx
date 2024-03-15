import Link from "next/link";

interface ListItemProps {
  href: string;
  text: string;
}

const DesktopMenuListItem: React.FC<ListItemProps> = ({ href, text }) => {
  return (
    <li
      className={`relative text-lg uppercase font-medium leading-4 slide-in-bar`}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default DesktopMenuListItem;
