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
          py-10 lg:pl-12  bg-sidebar 
          w-full sm:w-full lg:w-[280px] 
          lg:h-[600px] sm:min-h-[200px]
          flex sm:flex-row lg:flex-col
          gap-6 sm:justify-center sm:items-start lg:justify-start
          lg:rounded-2xl bg-blue-600 sm:shadow-[0] 
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
