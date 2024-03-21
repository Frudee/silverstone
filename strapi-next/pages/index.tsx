import Hero from "../components/index/Hero";
import ProductSlider from "../components/index/ProductSlider";
import { gql } from "@apollo/client";
import createApolloClient from "../apollo-client";

export type category = {
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
    data: category[];
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
    <>
      <Hero props={pageData.homePage.data.attributes} />
      <ProductSlider data={pageData.productCategories.data} />
    </>
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
    // console.log(data);
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
// export const getStaticProps = async () => {
//   try {
//     const pageResponse = await fetch(
//       "http://localhost:1337/api/home-page?populate=*"
//     );
//     const responseData = await pageResponse.json();
//     const pageData = responseData.data as IndexPageProps;
//     return {
//       props: {
//         pageData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw new Error("Failed to fetch products");
//   }
// };

export default IndexPage;
