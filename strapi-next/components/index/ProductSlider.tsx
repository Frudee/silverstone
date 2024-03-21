import Image from "next/image";
import { category } from "../../pages";

type ProductSliderProps = {
  data: category[];
};

const ProductSlider: React.FC<ProductSliderProps> = ({ data }) => {
  return (
    <div>
      {data.map((category, i) => (
        <div key={i}>
          <h4>{category.attributes.name}</h4>
          <span>{category.attributes.description}</span>
          <Image
            src={`http://localhost:1337${category.attributes.image.data?.attributes.url}`}
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
