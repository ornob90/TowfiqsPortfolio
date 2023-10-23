import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`active:scale-95 duration-300 font-bold py-2 px-6 hover:-translate-y-[2px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
