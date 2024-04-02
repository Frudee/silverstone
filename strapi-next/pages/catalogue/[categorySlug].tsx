import createApolloClient from "../../apollo-client";
import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import Category from "../../types/category";
import Image from "next/image";
import Link from "next/link";
import Product from "../../types/product";

const getCategoryByQuery = async (categorySlug: string): Promise<any> => {
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
    const products: Product[] = data.products.data;
    return { category, products };
  } catch (err) {
    console.log(err);
  }
};

const CategoryPage: React.FC<{
  category: Category;
  products: Product[];
}> = ({ category, products }) => {
  const { name, image, description, slug } = category?.attributes;
  return (
    <section>
      <div className="flex flex-col w-1/3">
        <span className="text-3xl">КАТЕГОРИЯ</span>
        <h1>{name}</h1>
        <span>{description}</span>
        <Image
          src={`http://localhost:1337${image.data.attributes.url}`}
          alt="category image"
          width={300}
          height={200}
        />
      </div>
      <div>
        <span className="text-3xl">Продукты</span>
        <ul>
          {products?.map((product: Product) => (
            <li key={product.attributes.name}>
              <Link href={`/catalogue/${slug}/${product.attributes.slug}`}>
                {product.attributes.name}
              </Link>
              <span>{product.attributes.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categorySlug = context.params?.categorySlug as string;
  const data = await getCategoryByQuery(categorySlug);
  return {
    props: {
      category: data.category,
      products: data.products,
      // categoryId: categoryId,
    },
  };
};
