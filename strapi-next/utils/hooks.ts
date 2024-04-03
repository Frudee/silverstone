import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Breadcrumb } from "../components/common/Breadcrumbs";
import Product from "../types/product";
import Category from "../types/category";
import { getCategoryBySlug } from "../graphql/queries/category/getCategoryBySlug";
import { getProductBySlug } from "../graphql/queries/product/getProductBySlug";
import pageMappings from "./pageMappings";

export const useAutoCloseMenu = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const body = document.querySelector("body");
      if (body) {
        if (window.innerWidth > 1024) {
          body.style.overflow = "auto";
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return [isOpen, setIsOpen];
};

export const useBreadcrumbs = () => {
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
      const previousSegment = index > 0 ? pathSegments[index - 1] : "";
      const href = `/${segment}${
        previousSegment !== "" ? "/" + previousSegment : ""
      }`;
      return { text: pageMappings[segment] || segment, href: href };
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

  return breadcrumbs;
};
