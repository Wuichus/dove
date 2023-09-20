import React, { PropsWithChildren } from "react";

type ButtonProps = {
  type?: "submit" | "button";
  onClick?: () => void;
} & PropsWithChildren;

const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className="text-black-light bg-terciary-light hover:bg-terciary-light-hover focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-terciary-dark dark:hover:terciary-dark-hover"
    >
      {children}
    </button>
  );
};

export default Button;
