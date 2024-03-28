import Link from "next/link";
import { decodeAndSplit } from "../../utils/utils";

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
    return <span className="text-gray-200">{decodeAndSplit(text)}</span>;
  }

  return (
    <li className="flex gap-4">
      <Link href={href}>{decodeAndSplit(text)}</Link>
      <span>/</span>
    </li>
  );
};

export default BreadcrumbItem;
