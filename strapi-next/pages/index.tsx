import { GetStaticProps } from "next";

type PageData = {
  id: number;
  attributes: {
    title: string;
    titleDesc: string;
  };
};

const IndexPage: React.FC<{ props: PageData["attributes"] }> = ({ props }) => {
  return (
    <div className="pt-[75px] px-4 flex flex-col gap-[30px]">
      <h1 className="text-[30px] tracking-wider">
        <strong>{props.title}</strong>
      </h1>
      <span className="w-12 block h-[5px] bg-primary"></span>
      <p className="text-sm tracking-wider">{props.titleDesc}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("http://localhost:1337/api/home-page");
    const responseData = await response.json();
    const pageData = responseData.data as PageData;
    return {
      props: {
        props: pageData.attributes,
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
