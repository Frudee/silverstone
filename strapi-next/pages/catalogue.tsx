import React from "react";
import Link from "next/link";
import GoBackButton from "../components/common/GoBackButton";
import createApolloClient from "../apollo-client";
import { gql } from "@apollo/client";
import Category from "../types/category";

const Catalogue: React.FC<{
  productCategories: Category[];
}> = ({ productCategories }) => {
  return (
    <div className="h-[1500px]">
      <h1>Catalogue</h1>
      <ul>
        {productCategories.map(({ attributes }) => (
          <li key={attributes.name}>
            <Link href={`/catalogue/${attributes.slug}`}>
              {attributes.name}
            </Link>
          </li>
        ))}
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
        query ProductCategories {
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
                slug
              }
              id
            }
          }
        }
      `,
    });
    return {
      props: {
        productCategories: data.productCategories.data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export default Catalogue;
