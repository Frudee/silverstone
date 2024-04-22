import Hero from "../components/index/Hero";
import ProductSlider from "../components/index/ProductSlider";
import Category from "../types/category";
import Features from "../components/index/Features";
import { getIndexPageData } from "../graphql/queries/indexPage/getIndexPageData";
import { Feature } from "../types/feature";
import News from "../components/index/News";

export type IndexPageProps = {
  productCategories: {
    data: Category[];
  };
  homePage: {
    data: {
      attributes: {
        title: string;
        titleDesc: string;
        Feature: Feature[];
      };
    };
  };
} | null;

const IndexPage: React.FC<{
  pageData: IndexPageProps;
}> = ({ pageData }) => {
  if (!pageData) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <Hero props={pageData.homePage.data.attributes} />
      <ProductSlider data={pageData.productCategories.data} />
      <Features features={pageData.homePage.data.attributes.Feature} />
      <News />
    </main>
  );
};

export const getStaticProps = async () => {
  try {
    const data = await getIndexPageData();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export default IndexPage;
