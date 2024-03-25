import React from "react";
import { Product } from "../types/product";
import Link from "next/link";
import GoBackButton from "../components/common/GoBackButton";
import createApolloClient from "../apollo-client";
import { gql } from "@apollo/client";

const Catalogue: React.FC<{ products: Product[] | null }> = ({ products }) => {
  return (
    <div className="h-[1500px]">
      <h1>Catalogue</h1>
      <ul>
        {!products ? (
          <div>No products found</div>
        ) : (
          products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                {product.attributes.name}
              </Link>
            </li>
          ))
        )}
      </ul>
      <GoBackButton />
    </div>
  );
};

export const getServerSideProps = async () => {
  const client = createApolloClient();
  try {
    const { data } = await client.query({
      query: gql`
        query ExampleQuery {
          products {
            data {
              attributes {
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                name
                characteristics
              }
              id
            }
          }
        }
      `,
    });
    return {
      props: {
        products: data.products.data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export default Catalogue;
