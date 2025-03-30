import StepIndicator from "@/components/molecules/step-indicator/StepIndicator";
import React from "react";
export type StepType = {
  active?: boolean;
  number: string | number;
  label: string;
};
type Props = {
  steps: Array<StepType>;
  currentStep: number | string;
};
const SideBar: React.FC<Props> = ({ steps, currentStep }) => {
  return (
    <div
      id="sidebar"
      className={`
          py-10 pl-12
          w-full sm:w-full lg:w-[280px] 
          lg:h-[600px] sm:h-[220px]
          flex sm:flex-row lg:flex-col
          gap-6
          sm:justify-center sm:items-start lg:justify-start
          lg:rounded-2xl
           bg-blue-600
          flex-shrink-0 
          bg-sidebar lg:shadow-2xl sm:shadow-[0] 
        `}
    >
      {steps.map((step) => (
        <StepIndicator
          key={step.number}
          {...step}
          active={step.number === currentStep}
        />
      ))}
    </div>
  );
};

export default SideBar;
