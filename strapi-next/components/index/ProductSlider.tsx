import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import Category from "../../types/category";
import Heading from "../common/Heading";
import ProductSliderItem from "./ProductSliderItem";
import "swiper/css";
import "swiper/css/pagination";
import CTAButton from "../common/CTAButton";

SwiperCore.use([Pagination, Autoplay]);

export type ProductSliderProps = {
  data: Category[];
};

const ProductSlider: React.FC<ProductSliderProps> = ({ data }) => {
  return (
    <section className="px-4 py-[75px] lg:px-[10%] xl:px-[20%]">
      <Heading text="Продукция" pageHeading={false} />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="mb-8"
      >
        {data.map((category, i) => (
          <SwiperSlide key={i}>
            <ProductSliderItem props={category} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CTAButton text="Каталог" primary />
    </section>
  );
};

export default ProductSlider;
