import React, { ButtonHTMLAttributes } from "react";

type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  primary?: boolean;
  className?: string;
};

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  primary,
  className,
  ...props
}) => {
  return (
    <button
      className={`${
        primary ? "bg-primary border-primary" : "bg-secondary border-secondary"
      } text-white border w-full lg:w-fit lg:px-32 px-4 py-3 rounded-sm text-sm uppercase tracking-wide hover:bg-transparent duration-150 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default CTAButton;
