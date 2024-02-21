import { GetStaticProps } from "next";
import Hero from "../components/Hero";
type PageData = {
  id: number;
  attributes: {
    title: string;
    titleDesc: string;
  };
};

const IndexPage: React.FC<{ pageData: PageData }> = ({ pageData }) => {
  return <Hero props={pageData.attributes} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("http://localhost:1337/api/home-page");
    const responseData = await response.json();
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
