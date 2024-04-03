import BreadcrumbItem from "./BreadcrumbItem";
import { useBreadcrumbs } from "../../utils/hooks";

export interface Breadcrumb {
  text: string;
  href: string;
}

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="lg:px-[10%] xl:px-[20%] py-[75px]">
      <ul className="flex gap-1">
        {breadcrumbs.map(({ href, text }, i) => (
          <BreadcrumbItem
            text={text}
            href={href}
            key={href}
            last={i === breadcrumbs.length - 1}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
