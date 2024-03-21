import Image from "next/image";

type ProductSliderProps = {
  attributes: {
    image: {
      data: {
        attributes: {
          url: string;
        };
      } | null;
    };
    name: string;
    description: string;
  }[];
};

const ProductSlider: React.FC<ProductSliderProps> = ({ attributes }) => {
  //   console.log(data);
  return (
    <div>
      {attributes.map((category, i) => (
        <div key={i}>
          <h4>{category.name}</h4>
          <span>{category.description}</span>
          <Image
            src={`http://localhost:1337${category.image.data?.attributes.url!}`}
            alt="image"
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
