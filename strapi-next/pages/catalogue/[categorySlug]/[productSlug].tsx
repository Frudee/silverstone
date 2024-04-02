import { GetServerSideProps } from "next";
import Product from "../../../types/product";
import GoBackButton from "../../../components/common/GoBackButton";
import Image from "next/image";
import { getProductBySlug } from "../../../graphql/queries/product/getProductBySlug";

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
  const productSlug = context.params?.productSlug as string;
  const product = await getProductBySlug(productSlug);
  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
