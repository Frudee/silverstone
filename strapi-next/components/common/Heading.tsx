import Divider from "./Divider";

export type HeadingProps = {
  pageHeading?: boolean;
  text: string;
};

const Heading: React.FC<HeadingProps> = ({
  text,
  pageHeading = true,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-4">
      {pageHeading ? (
        <h1 className="text-4xl font-bold" {...props}></h1>
      ) : (
        <h2 className="text-4xl font-semibold" {...props}>
          {text}
        </h2>
      )}
      <Divider />
    </div>
  );
};

export default Heading;
