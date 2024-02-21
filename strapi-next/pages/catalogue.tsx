import React from "react";
import { GetServerSideProps } from "next";
import { Product } from "../types/product";
import Link from "next/link";
import GoBackButton from "../components/common/GoBackButton";

const Catalogue: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      <h1>Catalogue</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.attributes.name}
            </Link>
          </li>
        ))}
      </ul>
      <GoBackButton />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch("http://localhost:1337/api/products");
    const responseData = await response.json();
    const products = responseData.data;
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
};

export default Catalogue;
