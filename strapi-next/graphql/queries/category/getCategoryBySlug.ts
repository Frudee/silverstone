import createApolloClient from "../../../apollo-client";
import Category from "../../../types/category";
import { gql } from "@apollo/client";

export const getCategoryBySlug = async (
  categorySlug: string
): Promise<Category> => {
  const client = createApolloClient();
  try {
    const { data } = await client.query({
      query: gql`
        query ProductCategories(
          $filters: ProductCategoryFiltersInput
          $productsFilters: ProductFiltersInput
        ) {
          productCategories(filters: $filters) {
            data {
              attributes {
                name
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                description
                slug
              }
            }
          }
          products(filters: $productsFilters) {
            data {
              attributes {
                name
                slug
              }
              id
            }
          }
        }
      `,
      variables: {
        filters: {
          slug: {
            eq: categorySlug,
          },
        },
        productsFilters: {
          product_categories: {
            slug: {
              eq: categorySlug,
            },
          },
        },
      },
    });
    const category: Category = data.productCategories.data[0];
    return category;
  } catch (err) {
    console.log(err);
    throw new Error(`Error fetching category by slug`);
  }
};
