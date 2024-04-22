import createApolloClient from "../../../apollo-client";
import { gql } from "@apollo/client";

export const getIndexPageData = async () => {
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
                Feature {
                  SVG {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  description
                  title
                }
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
