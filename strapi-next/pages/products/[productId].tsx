import React from "react";
import { GetServerSideProps } from "next";
import qs from "qs";
import { Product } from "../../types/product";
import GoBackButton from "../../components/common/GoBackButton";

const getProductByQuery = async (id: string): Promise<Product> => {
  const query = qs.stringify(
    {
      filters: {
        id: {
          $eq: id,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`http://localhost:1337/api/products?${query}`);
  const responseData = await response.json();
  const productData = responseData.data[0];
  return productData;
};

const ProductPage: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="w-1/2 m-auto">
      <h1>{product.attributes.name}</h1>
      {product.attributes.description.map((desc, index) => {
        if (desc.type === "paragraph") {
          return (
            <p key={index}>
              {desc.children.map((child) => child.text).join("")}
            </p>
          );
        } else {
          return null; // Handle other types if needed
        }
      })}
      <GoBackButton />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productId = context.params?.productId as string;
  const product = await getProductByQuery(productId);
  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
