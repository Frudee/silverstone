import { GetStaticProps } from "next";
import Hero from "../components/Hero";
type PageData = {
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
};

const IndexPage: React.FC<{
  pageData: PageData;
}> = ({ pageData }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const pageResponse = await fetch(
      "http://localhost:1337/api/home-page?populate=*"
    );
    const responseData = await pageResponse.json();
    const pageData = responseData.data as PageData;
    return {
      props: {
        pageData,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        pageData: [],
      },
    };
  }
};

export default IndexPage;
