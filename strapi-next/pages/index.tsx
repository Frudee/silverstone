import { GetStaticProps } from "next";
import heroBg from "../public/hero-bg.png";
import CTAButton from "../components/common/CTAButton";
type PageData = {
  id: number;
  attributes: {
    title: string;
    titleDesc: string;
  };
};

const IndexPage: React.FC<{ props: PageData["attributes"] }> = ({ props }) => {
  return (
    <div
      style={{ backgroundImage: `url(${heroBg.src})` }}
      className={` bg-cover py-[75px] text-white px-4 flex flex-col gap-24 `}
    >
      <div className="flex flex-col gap-[30px]">
        <h1 className="text-[30px] tracking-wider">
          <strong>{props.title}</strong>
        </h1>
        <span className="w-12 block h-[5px] bg-primary"></span>
        <p className="text-sm tracking-wide leading-6">{props.titleDesc}</p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <CTAButton className="w-2/3" text="Узнать больше" />
        <CTAButton className="w-2/3" text="каталог" primary />
      </div>
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
