import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { Category } from "../../pages";
import Heading from "../common/Heading";
import ProductSliderItem from "./ProductSliderItem";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

export type ProductSliderProps = {
  data: Category[];
};

const ProductSlider: React.FC<ProductSliderProps> = ({ data }) => {
  return (
    <section className="px-4 py-[75px]">
      <Heading text="Продукция" pageHeading={false} />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {data.map((category, i) => (
          <SwiperSlide key={i}>
            <ProductSliderItem props={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSlider;
