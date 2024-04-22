import heroBg from "../../public/hero-bg.png";
import CTAButton from "../common/CTAButton";
import Divider from "../common/Divider";
type HeroProps = {
  title: string;
  titleDesc: string;
};

const Hero: React.FC<{ props: HeroProps }> = ({ props }) => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg.src})` }}
      className={` bg-cover lg:bg-center py-[75px] lg:pt-[150px] lg:pb-[200px] text-white px-4 lg:px-[10%] xl:px-[20%] flex flex-col gap-24 `}
    >
      <div className="flex flex-col lg:items-center gap-[30px] lg:gap-[45px]">
        <h1 className="text-[30px] lg:text-[54px] tracking-wider lg:text-center">
          <strong>{props.title}</strong>
        </h1>
        <Divider />
        <p className="text-sm lg:text-lg lg:max-w-[780px] tracking-wide leading-6 lg:text-center">
          {props.titleDesc}
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-center w-full gap-4 items-center">
          <CTAButton className="w-full lg:w-1/3" text="Узнать больше" />
          <CTAButton className="w-full lg:w-1/3" text="каталог" primary />
        </div>
      </div>
    </section>
  );
};

export default Hero;
