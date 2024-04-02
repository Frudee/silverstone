import Link from "next/link";

type BreadcrumbItemProps = {
  text: string;
  href: string;
  last: boolean;
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  text,
  href,
  last,
}) => {
  if (last) {
    return <span className="text-gray-200 text-xs">{text}</span>;
  }

  return (
    <li className="flex gap-1">
      <Link href={href} className="text-xs">
        {text}
      </Link>
      <span className="text-xs">&gt;</span>
    </li>
  );
};

export default BreadcrumbItem;
