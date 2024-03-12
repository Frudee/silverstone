import { GetStaticProps } from "next";
import Hero from "../components/Hero";
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
        };
      }[];
    };
  };
} | null;

const IndexPage: React.FC<{
  pageData: IndexPageProps;
}> = ({ pageData }) => {
  // console.log(pageData);
  if (!pageData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Hero props={pageData.attributes} />
      {pageData.attributes.product_categories.data.map((category) => (
        <div key={category.id}>
          <h1>{category.attributes.name}</h1>
        </div>
      ))}
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
