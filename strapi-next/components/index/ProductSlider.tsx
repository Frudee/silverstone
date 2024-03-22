import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { category } from "../../pages";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

type ProductSliderProps = {
  data: category[];
};

const ProductSlider: React.FC<ProductSliderProps> = ({ data }) => {
  return (
    <section className="px-4 py-[75px]">
      <h2 className="text-4xl font-semibold">Продукция</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {data.map((category, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col py-[40px]">
              <Image
                src={`http://localhost:1337${category.attributes.image.data?.attributes.url}`}
                alt="image"
                width={300}
                height={300}
                className="w-full max-w-[500px]"
              />
              <div>
                <h4>{category.attributes.name}</h4>
                <span>{category.attributes.description}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSlider;
