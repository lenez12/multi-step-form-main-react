import StepNumber from "@/components/atoms/step-number/StepIndicatorCircle";
import React from "react";

type Props = {
  number: string | number;
  label: string;
  active?: boolean;
};

const StepIndicator: React.FC<Props> = ({ active, label, number }) => {
  return (
    <div className="flex flex-row gap-4 items-center z-10">
      <StepNumber number={number} active={active} />
      <div className="flex flex-col  justify-between content-start sm:hidden lg:flex">
        <span className="font-light text-gray-300 text-[14px] ">
          STEP {number}
        </span>
        <span className="font-medium text-[16px] uppercase text-white tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
};

export default StepIndicator;
