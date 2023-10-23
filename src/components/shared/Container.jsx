import React from "react";

const Container = ({ children, className }) => {
  return <div className={`${className} mx-auto w-[90%]`}>{children}</div>;
};

export default Container;
