import Category from "../../types/category";
import Image from "next/image";
import CTAButton from "../common/CTAButton";

export type ProductSliderProps = {
  props: Category;
};

const ProductSliderItem: React.FC<ProductSliderProps> = ({ props }) => {
  const { image, name, description } = props.attributes;
  return (
    <div className="flex flex-col min-h-full gap-7 lg:flex-row justify-between pb-[70px] lg:pb-[60px] pt-4">
      <Image
        src={`http://localhost:1337${image.data?.attributes.url}`}
        alt="image"
        width={300}
        height={200}
        className="w-auto clip-image"
        priority
      />
      <div className="flex flex-col gap-7 lg:w-full ">
        <h4 className="text-2xl font-medium text-primary">{name}</h4>
        <span>{description}</span>
        <CTAButton className="mt-auto" text="Узнать больше" />
      </div>
    </div>
  );
};

export default ProductSliderItem;
