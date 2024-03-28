import createApolloClient from "../../apollo-client";
import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import Category from "../../types/category";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types/product";

const getCategoryByQuery = async (id: string): Promise<any> => {
  const client = createApolloClient();
  try {
    const { data } = await client.query({
      query: gql`
        query ProductCategories(
          $productCategoryId: ID
          $filters: ProductFiltersInput
        ) {
          productCategory(id: $productCategoryId) {
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
              }
            }
          }
          products(filters: $filters) {
            data {
              attributes {
                name
              }
              id
            }
          }
        }
      `,
      variables: {
        productCategoryId: id,
        filters: {
          product_categories: {
            id: {
              eq: id,
            },
          },
        },
      },
    });
    // console.log(data);
    const category: Category = data.productCategory.data.attributes;
    const products: Product[] = data.products.data;
    return { category, products };
  } catch (err) {
    console.log(err);
  }
};

const CategoryPage: React.FC<{ category: Category; products: Product[] }> = ({
  category,
  products,
}) => {
  console.log(products);
  return (
    <section>
      <div className="flex flex-col w-1/3">
        <span className="text-3xl">КАТЕГОРИЯ</span>
        <h1>{category?.name}</h1>
        <span>{category?.description}</span>
        <Image
          src={`http://localhost:1337${category?.image.data.attributes.url}`}
          alt="category image"
          width={300}
          height={200}
        />
        <Link href={`/catalogue/${category?.name}/`}>Ссылка на продукт</Link>
      </div>
      <div>
        <span className="text-3xl">Продукты</span>
        <ul>
          {products?.map((product: Product) => (
            <li key={product.attributes.name}>
              <Link href={`/catalogue/${category?.name}/${product.id}`}>
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
  const params = context.params?.category as string;
  const categoryId = params?.split("-").pop() as string;
  const data = await getCategoryByQuery(categoryId);
  console.log(data);
  return {
    props: {
      category: data.category,
      products: data.products,
    },
  };
};
