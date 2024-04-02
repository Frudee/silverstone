import createApolloClient from "../../../apollo-client";
import Product from "../../../types/product";
import { gql } from "@apollo/client";

export const getProductBySlug = async (
  productSlug: string
): Promise<Product> => {
  const client = createApolloClient();

  const { data } = await client.query({
    query: gql`
      query ProductQuery($filters: ProductFiltersInput) {
        products(filters: $filters) {
          data {
            attributes {
              characteristics
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              name
              slug
              product_categories {
                data {
                  attributes {
                    name
                    slug
                  }
                }
              }
            }
            id
          }
        }
      }
    `,
    variables: {
      filters: {
        slug: {
          eq: productSlug,
        },
      },
    },
  });

  const product: Product = data.products.data[0];
  console.log(product);
  return product;
};