import { useRouter } from "next/router";
import BreadcrumbItem from "./BreadcrumbItem";
import { useEffect, useState } from "react";
import { getCategoryBySlug } from "../../graphql/queries/category/getCategoryBySlug";
import { getProductBySlug } from "../../graphql/queries/product/getProductBySlug";
import Category from "../../types/category";
import Product from "../../types/product";

interface Breadcrumb {
  text: string;
  href: string;
}

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  useEffect(() => {
    const pathSegments = router.asPath
      .split("/")
      .filter((segment) => segment !== "");
    const promises: Promise<Category | Product>[] = [];

    pathSegments.forEach((segment, index) => {
      if (index > 0 && pathSegments[index - 1] === "catalogue") {
        promises.push(getCategoryBySlug(segment));
      }
      if (index > 0 && pathSegments[index - 2] === "catalogue") {
        promises.push(getProductBySlug(segment));
      }
    });
    pathSegments.length === 3 && pathSegments.splice(-2);
    pathSegments.length === 2 && pathSegments.splice(-1);

    const resultArray: Breadcrumb[] = pathSegments.map((segment, index) => {
      const previousSegment = index > 0 ? pathSegments[index - 1] : ""; // Get the previous segment
      const href = `/${segment}${
        previousSegment !== "" ? "/" + previousSegment : ""
      }`;
      return { text: segment, href: href };
    });

    Promise.all(promises).then((data) => {
      data.forEach((segment) => {
        const previousHref = resultArray[resultArray.length - 1]?.href;
        resultArray.push({
          text: segment?.attributes?.name,
          href: `${previousHref}/${segment?.attributes?.slug}`,
        });
      });
      setBreadcrumbs([{ text: "Главная", href: "/" }, ...resultArray]);
    });
  }, [router.asPath]);

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
