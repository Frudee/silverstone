import { useRouter } from "next/router";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const routeWithoutQuery = router.asPath.split("?")[0];
  const pathArray = routeWithoutQuery.split("/").filter((item) => item !== "");

  const crumbs = pathArray.map((path, index) => {
    const href = "/" + pathArray.slice(0, index + 1).join("/");
    return {
      href,
      text: path,
    };
  });
  crumbs.unshift({
    href: "/",
    text: "Главная",
  });

  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="lg:px-[10%] xl:px-[20%] py-[75px]">
      <ul className="flex gap-4">
        {crumbs.map(({ href, text }, i) => (
          <BreadcrumbItem
            text={text}
            href={href}
            key={href}
            last={i === crumbs.length - 1}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
