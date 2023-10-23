import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`${className} active:scale-95 duration-300`}>
      {children}
    </button>
  );
};

export default Button;
