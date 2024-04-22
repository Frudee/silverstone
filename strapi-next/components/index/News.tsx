import CTAButton from "../common/CTAButton";
import Divider from "../common/Divider";
import Heading from "../common/Heading";

const NEWS_DATA = [
  {
    title: "Мы - лидер индустрии. Работаем для людей.",
    desc: "Мы производим рукавные фильтры высокого качества для промышленности.",
    imgUrl: "http://localhost:1337/uploads/item_457_66bcab4688.jpg",
  },
  {
    title: "Мы - лидер индустрии. Работаем для людей.",
    desc: "Мы производим рукавные фильтры высокого качества для промышленности.",
    imgUrl: "http://localhost:1337/uploads/item_457_66bcab4688.jpg",
  },
];

const News: React.FC = () => {
  return (
    <section className="px-4 lg:px-[10%] xl:px-[20%] pb-[70px]">
      <Heading text="Новости" pageHeading={false} />
      <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-8 pt-12">
        {NEWS_DATA.map(({ title, desc }, i) => (
          <div
            className="flex flex-col gap-6 pt-[150px] pb-[50px] max-w-[550px] px-3 rounded-md text-white"
            key={i}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${NEWS_DATA[i].imgUrl})`,
            }}
          >
            <span className="font-bold text-[26px] w-full">{title}</span>
            <Divider />
            <CTAButton text="Узнать больше" primary />
            <span>{desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default News;
