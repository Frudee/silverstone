import Category from "../../types/category";
import Image from "next/image";

export type ProductSliderProps = {
  props: Category;
};

const ProductSliderItem: React.FC<ProductSliderProps> = ({ props }) => {
  const { image, name, description } = props.attributes;
  return (
    <div className="flex flex-col gap-7 lg:flex-row lg:justify-between pb-[40px] lg:pb-[60px] pt-4">
      <Image
        src={`http://localhost:1337${image.data?.attributes.url}`}
        alt="image"
        width={300}
        height={200}
        className="w-full h-[200px] max-w-[500px] clip-image"
      />
      <div className="flex flex-col gap-7 lg:w-full">
        <h4 className="text-2xl font-medium text-primary">{name}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ProductSliderItem;
