import Hero from "../components/index/Hero";
import ProductSlider from "../components/index/ProductSlider";
export type IndexPageProps = {
  id: number;
  attributes: {
    title: string;
    titleDesc: string;
    product_categories: {
      data: {
        id: number;
        attributes: {
          name: string;
          image: any;
          description: string;
        };
      }[];
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
    <>
      <Hero props={pageData.attributes} />
      <ProductSlider
        product_categories={pageData.attributes.product_categories}
      />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const pageResponse = await fetch(
      "http://localhost:1337/api/home-page?populate=*"
    );
    const responseData = await pageResponse.json();
    const pageData = responseData.data as IndexPageProps;
    return {
      props: {
        pageData,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export default IndexPage;
