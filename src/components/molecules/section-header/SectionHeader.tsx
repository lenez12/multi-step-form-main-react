import SectionDescription from "@/components/atoms/section-description/SectionDescription";
import SectionTitle from "@/components/atoms/section-title/SectionTitle";
import React from "react";

type Props = {
  title: string;
  description: string;
};

const SectionHeader: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </div>
  );
};

export default SectionHeader;
