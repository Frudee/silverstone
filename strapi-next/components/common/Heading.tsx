import Divider from "./Divider";

export type HeadingProps = {
  pageHeading?: boolean;
  text: string;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({
  text,
  pageHeading = true,
  className,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {pageHeading ? (
        <h1 className={`text-4xl font-bold  leading-none ${className}`}></h1>
      ) : (
        <h2 className={`text-4xl font-semibold leading-none ${className}`}>
          {text}
        </h2>
      )}
      <Divider />
    </div>
  );
};

export default Heading;
