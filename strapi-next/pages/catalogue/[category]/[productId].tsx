import React from "react";
import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import { Product } from "../../../types/product";
import GoBackButton from "../../../components/common/GoBackButton";
import createApolloClient from "../../../apollo-client";
import Image from "next/image";

const getProductByQuery = async (id: any): Promise<Product> => {
  const client = createApolloClient();

  const { data } = await client.query({
    query: gql`
      query ProductQuery($productId: ID) {
        product(id: $productId) {
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
            }
            id
          }
        }
      }
    `,
    variables: {
      productId: id,
    },
  });
  const product: Product = data.product.data;
  return product;
};

const ProductPage: React.FC<{ product: Product }> = ({ product }) => {
  const { name, image, description } = product.attributes;

  return (
    <div className="w-1/2 m-auto">
      <h1>{name}</h1>
      <Image
        src={`http://localhost:1337${image.data?.attributes.url}`}
        alt="product image"
        width={300}
        height={200}
      />
      <p>{description}</p>
      <GoBackButton />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productId = context.params?.productId;
  const product = await getProductByQuery(productId);
  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
