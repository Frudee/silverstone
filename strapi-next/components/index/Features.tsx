import Image from "next/image";
import { Feature } from "../../types/feature";
import Heading from "../common/Heading";

export interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="flex flex-col gap-8 px-4 lg:px-[10%] xl:px-[20%] text-sm">
      <Heading text="Наши преимущества" pageHeading={false} />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {features.map(({ title, description, SVG }, i) => (
          <div className="flex flex-col gap-2 items-center text-center" key={i}>
            <Image
              src={`http://localhost:1337${SVG.data.attributes.url}`}
              alt="feature img"
              width={50}
              height={50}
            />
            <span className="font-bold">{title}</span>
            <span className="text-gray-500">{description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
