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
        primary ? "bg-primary" : "bg-secondary"
      } text-white px-4 py-2 rounded-sm text-sm uppercase tracking-wide  ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default CTAButton;
