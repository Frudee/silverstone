import type { Category } from "../../pages";
import Image from "next/image";

export type ProductSliderProps = {
  props: Category;
};

const ProductSliderItem: React.FC<ProductSliderProps> = ({ props }) => {
  const { attributes } = props;
  return (
    <div className="flex flex-col gap-7 pb-[40px] pt-4">
      <Image
        src={`http://localhost:1337${attributes.image.data?.attributes.url}`}
        alt="image"
        width={300}
        height={200}
        className="w-full h-[200px] max-w-[500px]"
      />
      <div className="flex flex-col gap-7">
        <h4 className="text-2xl font-medium text-primary">{attributes.name}</h4>
        <span>{attributes.description}</span>
      </div>
    </div>
  );
};

export default ProductSliderItem;
