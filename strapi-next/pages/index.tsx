import Hero from "../components/index/Hero";
import ProductSlider from "../components/index/ProductSlider";
import { gql } from "@apollo/client";
import createApolloClient from "../apollo-client";

export type Category = {
  attributes: {
    image: {
      data: {
        attributes: {
          url: string;
        };
      } | null;
    };
    name: string;
    description: string | null;
  };
};
export type IndexPageProps = {
  productCategories: {
    data: Category[];
  };
  homePage: {
    data: {
      attributes: {
        title: string;
        titleDesc: string;
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
    </main>
  );
};

export const getStaticProps = async () => {
  const client = createApolloClient();
  try {
    const { data } = await client.query({
      query: gql`
        query ExampleQuery {
          productCategories {
            data {
              attributes {
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                name
                description
              }
            }
          }
          homePage {
            data {
              attributes {
                title
                titleDesc
              }
            }
          }
        }
      `,
    });
    return {
      props: {
        pageData: data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export default IndexPage;
