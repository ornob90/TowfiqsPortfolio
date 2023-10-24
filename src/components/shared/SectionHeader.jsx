import React from "react";

const SectionHeader = ({ name }) => {
  return (
    <div>
      <h1 className="font-generalBold text-3xl sm:text-4xl md:text-5xl text-title mb-6 mt-12 md:mt-16 border-l-[8px] border-l-secondary pl-3">
        {name}
      </h1>
    </div>
  );
};

export default SectionHeader;
