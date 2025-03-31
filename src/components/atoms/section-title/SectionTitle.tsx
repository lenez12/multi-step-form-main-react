import React from "react";

type Props = {
  children: React.ReactNode;
};

const SectionTitle: React.FC<Props> = ({ children }) => {
  return <h1 className="text-marine-blue">{children}</h1>;
};

export default SectionTitle;
