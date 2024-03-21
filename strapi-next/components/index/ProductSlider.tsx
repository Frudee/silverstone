import Image from "next/image";

type ProductSliderProps = {
  product_categories: {
    data: {
      id: number;
      attributes: {
        name: string;
        image: any;
        description: string;
      };
    }[];
  };
};

const ProductSlider: React.FC<ProductSliderProps> = ({
  product_categories,
}) => {
  const { data } = product_categories;
  return (
    <div>
      {data.map((category) => (
        <div key={category.id}>
          <h4>{category.attributes.name}</h4>
          <span>{category.attributes.description}</span>
          <Image
            src={category.attributes.image.data.attributes.url}
            alt="image"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
