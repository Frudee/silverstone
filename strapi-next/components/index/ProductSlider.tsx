import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { category } from "../../pages";
import "swiper/css";

type ProductSliderProps = {
  data: category[];
};

const ProductSlider: React.FC<ProductSliderProps> = ({ data }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {data.map((category, i) => (
        <SwiperSlide key={i}>
          <h4>{category.attributes.name}</h4>
          <span>{category.attributes.description}</span>
          <Image
            src={`http://localhost:1337${category.attributes.image.data?.attributes.url}`}
            alt="image"
            width={500}
            height={500}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
