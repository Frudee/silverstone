import React from "react";
import { GetServerSideProps } from "next";
import { Product } from "../types/product";
import Link from "next/link";
import GoBackButton from "../components/common/GoBackButton";

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
  try {
    const response = await fetch("http://localhost:1337/api/products");
    const responseData = await response.json();
    const products = responseData.data as Product[];
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export default Catalogue;
