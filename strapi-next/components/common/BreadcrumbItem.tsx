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
    return <span className="text-gray-200">{text}</span>;
  }

  return (
    <li className="flex gap-4">
      <Link href={href}>{text}</Link>
      <span>/</span>
    </li>
  );
};

export default BreadcrumbItem;
