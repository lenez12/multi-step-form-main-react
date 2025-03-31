import React from "react";

type Props = {
  children: React.ReactNode;
};

const SectionDescription: React.FC<Props> = ({ children }) => {
  return (
    <span className="lg:text-[18px] sm:text-[20px] text-gray-400">
      {children}
    </span>
  );
};

export default SectionDescription;
